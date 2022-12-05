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