from PIL import Image

def process_image(input_image_path, output_image_path):
    with Image.open(input_image_path) as img:
        # Example processing: Convert to grayscale
        img = img.convert('L')
        img.save(output_image_path)

if __name__ == "__main__":
    input_image_path = "input_image.jpg"
    output_image_path = "output_image.jpg"
    process_image(input_image_path, output_image_path)
