import os
import sys
import glob
import time
import subprocess
import imageio_ffmpeg

def main():
    folder = os.path.dirname(os.path.abspath(__file__))
    ffmpeg_exe = imageio_ffmpeg.get_ffmpeg_exe()
    
    input_video = os.path.join(folder, 'demo_tight_crop.mp4')
    output_video = os.path.join(folder, 'demo.mp4')
    
    if not os.path.exists(input_video):
        # Generate tight crop
        input_file = os.path.join(folder, 'demo.mp4')
        print(f"Strak bijsnijden van: {input_file}")
        cmd = [
            ffmpeg_exe, "-y",
            "-i", input_file,
            "-vf", "crop=716:824:20:158",
            "-c:v", "libx264",
            "-crf", "22",
            "-preset", "faster",
            "-c:a", "aac",
            "-b:a", "128k",
            "-movflags", "+faststart",
            input_video
        ]
        subprocess.run(cmd, check=True)
        
    # Replace demo.mp4 with input_video safely
    for _ in range(5):
        try:
            if os.path.exists(output_video):
                os.remove(output_video)
            os.replace(input_video, output_video)
            print("⚡ Strak bijsnijden voltooid! Alle zwarte randen zijn succesvol verwijderd.")
            return
        except Exception as e:
            print(f"Wachten op vrijgeven van bestand... ({e})")
            time.sleep(1)

if __name__ == "__main__":
    main()
