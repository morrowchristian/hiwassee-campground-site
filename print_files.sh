#!/bin/bash

# Output file
output_file="output.txt"

# Clear previous contents
> "$output_file"

# Directory to process
directory="src"

# Function to print file contents with a header
print_file_contents() {
    local file="$1"
    {
        echo
        echo "=============================="
        echo "File: $file"
        echo "=============================="
        cat "$file"
        echo
    } >> "$output_file"
}

# Loop through src directory
if [ -d "$directory" ]; then
    {
        echo
        echo "********** Directory: $directory **********"
    } >> "$output_file"

    find "$directory" -type f | while read -r file; do
        print_file_contents "$file"
    done
else
    echo "Directory $directory does not exist." >> "$output_file"
fi

echo "All files have been written to $output_file"
