import json

def read_crates():
    f = open('crates.json')
    # f = open('test-crates.json')
    data = json.load(f)
    f.close()
    return data

def get_rearrangements():
    instructions = []
    with open('rearrangements.txt') as f:
    # with open('test-rearrangements.txt') as f:
        for line in f:
            keep = line.split('move ')[1]
            after_from = keep.split(' from ')
            number_to_move = int(after_from[0])
            from_line = after_from[1].split(' to ')[0]
            to_line = after_from[1].split(' to ')[1].split('\n')[0]
            instructions.append([number_to_move, from_line, to_line])
    return instructions

def move(crates, instructions):
    for instr in instructions:
        move = crates[instr[1]][len(crates[instr[1]]) - instr[0]:len(crates[instr[1]])]
        crates[instr[2]] = crates[instr[2]] + move[::-1]
        crates[instr[1]] = crates[instr[1]][0: len(crates[instr[1]]) - instr[0]]
        print(crates)
    print("reorganised: ", crates)
    return crates


crates_init = read_crates()
print("original: ",crates_init)
instructions = get_rearrangements()
crates_final = move(crates_init, instructions)