for file in *.mov; do
    ffmpeg -i "$file" "${file%.*}.mp4"
done