import os
import subprocess
from fire import Fire

# Change this to the path of your main folder
main_folder_path = "path/to/your/main/folder"
# Add or remove video file extensions as needed
video_extensions = (".mp4", ".avi", ".mov", ".mkv")


def compress_video(video_path, output_path):

    # Define the ffmpeg command for compression
    # This is a very basic compression command, adjust the codec and parameters as needed
    ffmpeg_command = [
        "ffmpeg",
        "-i",
        video_path,
        "-vcodec",
        "libx265",
        "-crf",
        "28",
        "-preset",
        "veryslow",
        output_path,
    ]

    # Execute the command
    try:
        subprocess.run(ffmpeg_command, check=True)
        print(f"Compressed video saved to {output_path}")
    except subprocess.CalledProcessError as e:
        print(f"Failed to compress {video_path}: {e}")


def find_and_compress_videos(dir_path, output_dir):

    for root, dirs, files in os.walk(dir_path):
        for file in files:
            if file.endswith(video_extensions):

                target_dir = os.path.join(output_dir, root)
                os.makedirs(target_dir, exist_ok=True)
                video_path = os.path.join(root, file)
                target_path = os.path.join(target_dir, file)
                print(f"Found video: {video_path}", f"compress to {target_path}")
                compress_video(video_path, target_path)


if __name__ == "__main__":
    Fire(find_and_compress_videos)
