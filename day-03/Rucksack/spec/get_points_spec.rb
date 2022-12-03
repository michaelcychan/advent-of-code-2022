require 'get_points'

RSpec.describe 'get_points' do
  it 'returns 16 for p' do
    input = 'p'
    expected = 16

    actual = get_points(input)
    expect(actual).to eq expected
  end
end
