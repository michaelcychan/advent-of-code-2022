require 'find_wrong'

RSpec.describe 'find_wrong' do
  it 'finds the letter which appears in both halves' do
    input = ['vJrwpWtwJgWr','hcsFMMfFFhFp']
    expected = 'p'

    actual = find_wrong(input)
    expect(actual).to eq expected
  end 
  it 'finds the letter which appears in both halves (case 2)' do
    input = ['jqHRNqRjqzjGDLGL','rsFMfFZSrLrFZsSL']
    expected = 'L'

    actual = find_wrong(input)
    expect(actual).to eq expected
  end
  it 'finds the letter which appears in both halves (case 3)' do
    input = ['PmmdzqPrV','vPwwTWBwg']
    expected = 'P'

    actual = find_wrong(input)
    expect(actual).to eq expected
  end

end