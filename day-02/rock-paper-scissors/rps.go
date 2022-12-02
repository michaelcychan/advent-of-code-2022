package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"
)

func getStrategy() []string {
	filepath := "./strategy.txt"
	file, err := os.Open(filepath)

	if err != nil {
		fmt.Printf("Open file failed! Error: %v \n", err)
	}

	fileScanner := bufio.NewScanner(file)
	fileScanner.Split(bufio.ScanLines)

	var fileLines []string

	for fileScanner.Scan() {
		fileLines = append(fileLines, fileScanner.Text())
	}

	if err = file.Close(); err != nil {
		fmt.Printf("Close file failed! Error: %v \n", err)
	}

	return fileLines

}

func calculatePoint(input string) int {

	// X: My rock; Y: My paper; Z: My scissors
	// A: opponent rock; B: opponent paper; C: opponent scissors

	shapePoints := map[string]int{
		"X": 1,
		"Y": 2,
		"Z": 3,
	}

	winPoints := map[string]int{
		"win":  6,
		"draw": 3,
		"lose": 0,
	}

	inputSlice := strings.Split(input, " ")

	var oneRoundPoint int = 0

	oneRoundPoint += shapePoints[inputSlice[1]]

	if (inputSlice[1] == "X" && inputSlice[0] == "C") || (inputSlice[1] == "Y" && inputSlice[0] == "A") || (inputSlice[1] == "Z" && inputSlice[0] == "B") {
		oneRoundPoint += winPoints["win"]
	} else if (inputSlice[1] == "X" && inputSlice[0] == "A") || (inputSlice[1] == "Y" && inputSlice[0] == "B") || (inputSlice[1] == "Z" && inputSlice[0] == "C") {
		oneRoundPoint += winPoints["draw"]
	} else {
		oneRoundPoint += winPoints["lose"]
	}

	return oneRoundPoint
}

func main() {
	stratSlices := getStrategy()
	fmt.Printf("The total number of lines is: %d \n", len(stratSlices))
	totalPoint := 0
	for i := 0; i < len(stratSlices); i++ {
		totalPoint += calculatePoint(stratSlices[i])
	}
	fmt.Printf("The total point is %d \n", totalPoint)
}
