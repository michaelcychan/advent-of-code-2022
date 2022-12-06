require 'tuning'

RSpec.describe 'tuning' do
  it 'returns 7 for case 1' do
    input = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
    expected = 7

    actual = tuning(4, input)
    expect(actual).to eq(expected)
  end
  it 'returns 5 for case 2' do
    input = 'bvwbjplbgvbhsrlpgdmjqwftvncz'
    expected = 5

    actual = tuning(4, input)
    expect(actual).to eq(expected)
  end
  it 'returns 6 for case 3' do
    input = 'nppdvjthqldpwncqszvftbrmjlhg'
    expected = 6

    actual = tuning(4, input)
    expect(actual).to eq(expected)
  end
end

