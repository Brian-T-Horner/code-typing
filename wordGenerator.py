from flask import Flask, jsonify, request
from flask_cors import CORS
import random
import nltk
from nltk.corpus import words as nltk_words
from itertools import islice

nltk.download('words')
app = Flask(__name__)
CORS(app)

punctuation = ['.', ',', '?', '/', '//', ';', ':', "'", '/', 
               '"', '[', ']', '{', '}', '|', '_', '-', '+', 
               '=', ')', '(', '*', '&', '%', '#', '@', '!', 
               '<', '>', '<=', '>=', '==', '+=', '-=', '/=', 
               '*=', '!=']
paradigms = ['for:', 'while:', 'in range()', 'each', 'if', 'else:', 
             'elif', 'ENUM', 'import', 'from', 'switch', 'case',
             'continue', 'break', 'return' 'def:', 'i', 'j', 'and', 
             'or'
             ]


#TODO: Maybe make the generation functions generate one of their respective items and return that
# TODO: collation could be called generate and based on the weights place a call to this function
# TODO: i.e. word gets choosen, it generated a word and checks if in lesson plan, if it is it returns
# TODO: i.e while word = None: keep finding a random one from the words generated?


def generate_words(min_len=5, max_len=5, word_count=10, lesson_plan = None):
    # TODO filter by lesson plan count, etc
    # TODO check if you can generate words with only certain letters included
    nltk.download('words')
    # Generating words that fall between the min and max lengths
    temp = [word for word in list(set(nltk_words.words())) if len(word) <= max_len and len(word) >= min_len]
    # Getting list to size word_count
    words = list(islice(temp, word_count))
    # Remvoing words that are not in the lesson plan 
    #TODO check if filter function would be more efficient
    if lesson_plan:
        for word in words:
            for letter in word:
                if letter not in lesson_plan:
                    words.remove(word)
    return words

#TODO seperate function to filter punctuation by lesson plan

#TODO seperate function to filter paradigms by letters included in lesson plan

def generate_punctuation(min_count, max_count, lesson_plan = None):
    #TODO adjust to have more than 0 punctuation?
    generated = []
    count = random.randint(min_count, max_count)
    while len(generated) != count:
        index = random.randint(0, len(punctuation)-1)
        current = punctuation[index]
        if lesson_plan:
            if current in lesson_plan:
                generated.append(current)
        else:
            generated.append(current)
    return generated

def generate_paradigms(min_count, max_count, lesson_plan = None):
    generated = []
    count = random.randint(min_count, max_count)
    while len(generated) != count:
        index = random.randint(0, len(paradigms)-1)
        current = paradigms[index]
        if lesson_plan:
            #TODO need to amend to check if all letters are in lesson plan
            if current in lesson_plan:
                generated.append(current)
        else:
            generated.append(current)
            
    return generated



def collate(words, punc, paradigm, count = 20, w_weight = 3, punc_weight = 1, para_weight = 3):
    word_index, punc_index, para_index = 0, 0, 0
    word_len, punc_len, para_len = len(words), len(punc), len(paradigm)
    res = []
    #TODO: fix because it is only returning paradigms
    for _ in range(count):
        # Generating a random choice of word, punc or para to add to result
        choice = random.choices(['para', 'punc', 'word'], weights = [para_weight, punc_weight, w_weight], k=1)
        #TODO need a better way to fix index out of bounds when running out of certain ones
        if choice == 'word':
            res.append(words[word_index])
            word_index += 1
            if word_index == word_len:
                word_index = random.randint(0, word_len-1)
        elif choice == 'punc':
            res.append(punc[punc_index])
            punc_index += 1
            if punc_index == punc_len:
                punc_index = random.randint(0, punc_len-1)
            
        else:
            res.append(paradigm[para_index])
            para_index += 1
            if para_index == para_len:
                para_index = random.randint(0, para_len-1)
    
    return res

if __name__ == "__main__":
    words = generate_words(1, 10, 20)
    punc = generate_punctuation(1, 10)
    paradigm = generate_paradigms(1, 20)
    res = collate(words, punc, paradigm)
    print(res)