def find_team_common(team)
  audit = {}
  for i in 0..(team.length - 1) do
    for j in 0..(team[i].length - 1) do
      if audit[team[i][j]] == nil
        audit[team[i][j]] = [i]
      else
        if !audit[team[i][j]].include?(i)
          audit[team[i][j]].push(i)
        end
      end
      if audit[team[i][j]] == [0,1,2]
        return team[i][j]
      end
    end
  end
end