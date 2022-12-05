from read_crate import read_crates
from get_rearranements import get_rearrangements
from move import move

crates_init = read_crates()
print("original: ",crates_init)
instructions = get_rearrangements()
crates_final = move(crates_init, instructions)
print("final: ", crates_final)