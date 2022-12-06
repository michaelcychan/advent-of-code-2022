require 'check_duplicate'

RSpec.describe 'check_duplicate' do
  it 'returns false for ["j", "p", "q", "m"]' do
    arr_four = ["j", "p", "q", "m"]
    expected = false

    actual = check_duplicate(arr_four)
    expect(actual).to eq(expected)
  end
end