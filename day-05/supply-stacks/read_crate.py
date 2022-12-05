import json

def read_crates():
    f = open('crates.json')
    # f = open('test-crates.json')
    data = json.load(f)
    f.close()
    return data