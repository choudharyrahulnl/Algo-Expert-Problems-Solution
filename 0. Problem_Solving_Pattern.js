// FREQUENCY COUNTER
// CALCULATE FREQUENCY TO CHECK 2 ARRAY OR STRING FOR EQUALITY OR
// JUST DOUBLE OR TRIPLE OR ANAGRAM OR ....
// STEPS:
// CHECK LENGTH OF BOTH ARRAY/STRING
// READ FIRST AND SECOND ARRAY/STRING INTO FREQUENCY COUNTER 1 & 2 (frequencyCounter1[val] = (frequencyCounter1[val] || 1) + 1)
// LOOP OVER FIRST FREQUENCY COUNTER AND CHECK ( use for in loop to get key of object)
//          IF KEY IS NOT PRESENT IN OTHER FREQUENCY COUNTER, RETURN FALSE (if(frequencyCounter2[key] === -1) return false)
//          IF VALUE NOT MATCHED WITH OTHER FREQUENCY COUNTER, RETURN FALSE () (if(frequencyCounter2[key] !== frequencyCounter1[key]) return false)




// MULTIPLE POINTER
// CREATE POINTER THAT CORRESPOND TO INDEX AND MOVE TOWARDS/BEGINNING/END/MIDDLE
// BASED ON CERTAIN CONDITION
// USED WHEN WE NEED TO FIND THE PAIR
// EX SORTED ARRAY FIND PAIR WHERE SUM = 0, IF SUM > 0 THEN START++ && IF SUM < 0 THEN END--
// EX COUNT UNIQUE VALUES, FIRST_POINTER = 0 & SECOND_POINTER = 1 , UNIQUE_COUNT = 1, THEN WHILE LOOP
// UNTIL SECOND IS LESS THAN ARRAY LENGTH, IF ARR[FIRST_POINTER] !== ARR[SECOND_POINTER] THEN
// UNIQUE_COUNT++;




// WINDOW SLIDER
// THIS PATTERN INVOLVES CREATING A WINDOW WHICH CAN EITHER BE AN ARRAY OR A NUMBER
// BASED ON CONDITION THIS WINDOW CAN BE EXPANDED OR SHRINK
// USEFUL TO KEEP TRACK OF SUBSET OF DATA
// EX FIND MAX SUM OF PAIR 2 OR 3 OR 4 OR WHATEVER N IS
// STEPS
// IF NUMS IS GREATER THAN ARRAY LENGTH RETURN NULL
// CREATE MAX AND TEMP
// LOOP OVER ARRAY TIMES NUMS TO GET MAX SUM OF NUMBER 2 OR 3 OR 4 OR N
// ASSIGN TEMP = MAX
// LOOP OVER ARRAY FROM NUM TO ARRAY LENGTH
// TEMP = TEMP SUM + ARRAY[i] - ARRAY [i-num]
// MAX = MATH.max(TEMP,MAX)
// RETURN MAX SUM




// DIVIDE AND CONQUER
// THIS PATTERN INVOLVES DIVIDING THE DATASET INTO SMALLER CHUNKS
// THEN REPEAT THE PROCESS WITH SUBSET OF DATA
// EX FIND VALUE INDEX IN GIVEN SORTED ARRAY
// MIN = 0 & MAX = ARR.LENGTH - 1
// WHILE ( MIN <= MAX)
//      FIND MIDDLE = MATH.FLOOR((MIN+MAX)/2)
//      IF ARR[MIDDLE] < VAL THAN MIN = MIDDLE + 1
//      ELSE IF ARR[MIDDLE] > VAL THAN MAX = MIDDLE - 1
//      ELSE RETURN MIDDLE
// RETURN NOT FOUND

