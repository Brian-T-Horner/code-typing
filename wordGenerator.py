from flask import Flask, jsonify, request
from flask_cors import CORS
import random
import nltk
from nltk.corpus import words as nltk_words

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

words = list(set(nltk_words.words()))
words = [word for word in words if len(word) < 5]

def generate_words(max_len, min_len):
    nltk.download('words')
    words = [word for word in list(set(nltk_words.words())) if len(word) <= max_len and len(word) >= min_len]
    return generate_words


def generate_punctuation(count):
    punctuation = None
    return punctuation

def generate_paradigms(count):
    paradigms = None
    return paradigms

if __name__ == "__main__":
    generate_words()
    generate_lesson()
    print(words)