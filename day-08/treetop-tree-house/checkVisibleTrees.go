package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func getTrees() [][]int {
	filepath := "./trees.txt"
	file, err := os.Open(filepath)

	if err != nil {
		fmt.Printf("Failed to open file. Error: %q \n", err)
	}

	fileScanner := bufio.NewScanner(file)
	fileScanner.Split(bufio.ScanLines)

	var fileLines [][]int
	for fileScanner.Scan() {
		newStrLine := strings.Split(fileScanner.Text(), "")
		var newIntLine []int
		for _, x := range newStrLine {
			eachNum, err := strconv.Atoi(x)
			if err == nil {
				newIntLine = append(newIntLine, eachNum)
			} else {
				fmt.Printf("conversion error: %v \n", err)
			}

		}

		fileLines = append(fileLines, newIntLine)
	}
	return fileLines
}

func isVisibleInside(treeConfig [][]int, row int, column int) bool {
	visible := false
	northHeight := treeConfig[0][column]
	southHeight := treeConfig[len(treeConfig)-1][column]
	westHeight := treeConfig[row][0]
	eastHeight := treeConfig[row][len(treeConfig[row])-1]

	// check north
	for y := 0; y < row; y++ {
		if treeConfig[y][column] > northHeight {
			northHeight = treeConfig[y][column]
		}
	}
	if northHeight < treeConfig[row][column] {
		visible = true
	}

	// check south
	for y := len(treeConfig) - 1; y > row; y-- {
		if treeConfig[y][column] > southHeight {
			southHeight = treeConfig[y][column]
		}
	}
	if southHeight < treeConfig[row][column] {
		visible = true
	}

	// check west
	for x := 0; x < column; x++ {
		if treeConfig[row][x] > westHeight {
			westHeight = treeConfig[row][x]
		}
	}
	if westHeight < treeConfig[row][column] {
		visible = true
	}

	// check east
	for x := len(treeConfig[row]) - 1; x > column; x-- {
		if treeConfig[row][x] > eastHeight {
			eastHeight = treeConfig[row][x]
		}
	}
	if eastHeight < treeConfig[row][column] {
		visible = true
	}

	return visible
}

func main() {
	treeConfig := getTrees()

	// example test case, total visible: 21
	// treeConfig := [][]int{{3, 0, 3, 7, 3}, {2, 5, 5, 1, 2}, {6, 5, 3, 3, 2}, {3, 3, 5, 4, 9}, {3, 5, 3, 9, 0}}

	totalRows := len(treeConfig)
	totalColumns := len(treeConfig[0])

	outerVisible := (totalRows + totalColumns - 2) * 2

	innerVisible := 0

	for row := 1; row < len(treeConfig)-1; row++ {
		for column := 1; column < len(treeConfig[row])-1; column++ {
			if isVisibleInside(treeConfig, row, column) {
				innerVisible += 1
			}
		}
	}

	fmt.Printf("Outer Visible: %d \n", outerVisible)
	fmt.Printf("Inner Visible: %d \n", innerVisible)
	fmt.Printf("Total Visible: %d \n", outerVisible+innerVisible)

}
