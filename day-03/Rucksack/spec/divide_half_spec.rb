require 'divide_half'

RSpec.describe 'divide_half' do
  it 'divides a long string into two halves' do
    input = 'vJrwpWtwJgWrhcsFMMfFFhFp'
    expected = ['vJrwpWtwJgWr','hcsFMMfFFhFp']

    actual = divide_half(input)
    expect(actual[0]).to eq expected[0]
    expect(actual[1]).to eq expected[1]
  end
  it 'divides a string into two halves (case 2)' do
    input = 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL'
    expected = ['jqHRNqRjqzjGDLGL', 'rsFMfFZSrLrFZsSL']

    actual = divide_half(input)
    expect(actual[0]).to eq expected[0]
    expect(actual[1]).to eq expected[1]
  end
end