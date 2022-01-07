// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
				{
					clue: "Plat nomer A berasal dari ........",
					answer: "SAMSAT",
					position: 3,
					orientation: "across",
					startx: 9,
					starty: 5
				},
				{
					clue: "Acara kita hari ini dilaksanakan di kota .......",
					answer: "BANDUNG",
					position: 1,
					orientation: "across",
					startx: 4,
					starty: 7
				},
				{
					clue: "Yang posisinya di belakang back",
					answer: "NOMER",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 10
				},
				{
					clue: "Kendaraan beroda 3",
					answer: "WAJAR",
					position: 7,
					orientation: "across",
					startx: 3,
					starty: 2
				},
				{
					clue: "Seorang barber mencukur rambut pelanggannya dengan .........",
					answer: "GANTIAN",
					position: 9,
					orientation: "across",
					startx: 2,
					starty: 4
				},
				{
					clue: "Dalam pertandingan sepakbola ada yg seri, ada yg kalah, dan ada juga yang .........",
					answer: "DATANG",
					position: 5,
					orientation: "down",
					startx: 10,
					starty: 2
				},
				{
					clue: "Alat musik yang digesek",
					answer: "BARET",
					position: 1,
					orientation: "down",
					startx: 4,
					starty: 7
				},
				{
					clue: "Yang dilakukan atlet sebelum pertandingan",
					answer: "PAMITAN",
					position: 2,
					orientation: "down",
					startx: 6,
					starty: 1
				},
				{
					clue: "Untuk menyalakan lampu, kita harus menekan ........",
					answer: "SEKALI",
					position: 6,
					orientation: "down",
					startx: 12,
					starty: 5
				},
				{
					clue: "Setelah lulus SMA, kemudian lanjut",
					answer: "PULANG",
					position: 8,
					orientation: "down",
					startx: 8,
					starty: 6
				},
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
