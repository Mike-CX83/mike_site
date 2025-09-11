#!/bin/bash

echo "Welcome to the Number Guessing Game!"

while true; do
    got_ya=$(( RANDOM % 10 + 1 ))
    attempts=0

    while true; do
        read -p "Guess the number (1-10) or enter '0' to quit: " guess

        if [[ "$guess" -eq 0 ]]; then
            echo "Thanks for playing. Goodbye!"
            break
        fi

        attempts=$((attempts + 1))

        if [[ "$guess" -eq $got_ya ]]; then
            echo "Nailed it! It only took you $attempts guess(es)! Luck? Maybe, give it another go to see what you got."
            break
        elif [[ "$guess" -lt $got_ya ]]; then
            echo "Nah bro, that's too low!"
        else
            echo "Swing and a miss!! Too high!"
        fi
    done

    read -p "Do you want to play again? (y/n): " play_again
    if [[ "$play_again" != "y" ]]; then
        echo "Thanks for playing the Number Guessing Game. See you next time!"
        break
    fi
done

