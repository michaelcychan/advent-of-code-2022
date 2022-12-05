def move(crates, instructions):
    for instr in instructions:
        move = crates[instr[1]][len(crates[instr[1]]) - instr[0]:len(crates[instr[1]])]
        crates[instr[2]] = crates[instr[2]] + move #just removed [::-1] from part 1 to part 2
        crates[instr[1]] = crates[instr[1]][0: len(crates[instr[1]]) - instr[0]]
    return crates