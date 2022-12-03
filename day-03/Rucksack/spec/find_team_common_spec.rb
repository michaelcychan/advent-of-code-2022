require 'find_team_common'

RSpec.describe 'find_team_common' do
  it 'finds common item in the team' do
    team = ['vJrwpWtwJgWrhcsFMMfFFhFp',
    'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
    'PmmdzqPrVvPwwTWBwg']
    expected = 'r'

    actual = find_team_common(team)
    expect(actual).to eq expected
  end

end