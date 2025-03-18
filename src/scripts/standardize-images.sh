#!/bin/bash

# Navigate to the automec images directory
cd "$(dirname "$0")/../assets/images/automec" || exit

# Process each product folder
for folder in */; do
  if [ -d "$folder" ]; then
    folder=${folder%/}  # Remove trailing slash
    folder_lower=$(echo "$folder" | tr '[:upper:]' '[:lower:]')
    echo "Processing $folder..."
    
    # Get all image files in the folder
    cd "$folder" || continue
    
    # Counter for renaming
    counter=1
    
    # Process each image file
    for file in *.{jpg,jpeg,png,JPG,JPEG,PNG}; do
      if [ -f "$file" ]; then
        # Get file extension
        ext="${file##*.}"
        ext=$(echo "$ext" | tr '[:upper:]' '[:lower:]')
        
        # Create new filename
        new_name="${folder_lower}-$(printf "%02d" $counter).$ext"
        
        # Rename if different
        if [ "$file" != "$new_name" ]; then
          echo "Renaming: $file -> $new_name"
          mv "$file" "$new_name"
        fi
        
        ((counter++))
      fi
    done
    
    echo "Processed $((counter-1)) images in $folder"
    cd ..
  fi
done

echo "Image standardization complete!" 