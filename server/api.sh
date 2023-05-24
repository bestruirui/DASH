#!/bin/bash
PREV_TOTAL=0
PREV_IDLE=0

# Read the initial total and idle CPU times.
CPU=($(sed -n 's/^cpu\s//p' /proc/stat))
PREV_IDLE=${CPU[3]}
for VALUE in "${CPU[@]}"; do
  let "PREV_TOTAL+=VALUE"
done


  sleep 1

  # Read the current total and idle CPU times.
  CPU=($(sed -n 's/^cpu\s//p' /proc/stat))
  IDLE=${CPU[3]}
  TOTAL=0
  for VALUE in "${CPU[@]}"; do
    let "TOTAL+=VALUE"
  done

  # Calculate the CPU usage since we last checked.
  DIFF_IDLE=$((IDLE - PREV_IDLE))
  DIFF_TOTAL=$((TOTAL - PREV_TOTAL))
  DIFF_USAGE=$(((100 * (DIFF_TOTAL - DIFF_IDLE) + DIFF_TOTAL / 2) / DIFF_TOTAL))

  # Remember the total and idle CPU times for the next check.
  PREV_TOTAL="$TOTAL"
  PREV_IDLE="$IDLE"

  

MEM_USAGE=$(free | awk 'NR==2{printf "%.0f\n", $3/$2 * 100}')
DISK_USAGE=$(df / --output=pcent | awk 'NR==2{printf "%d\n", $1}')

echo "$DIFF_USAGE"
echo "$MEM_USAGE"
echo "$DISK_USAGE"
