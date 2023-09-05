import csv
import os

# Use '.' to represent the current directory
folder_path = '.'

# Get a list of all CSV files in the folder
csv_files = [file for file in os.listdir(folder_path) if file.endswith('.csv')]

# Initialize an empty list to store the merged data
merged_data = []

# Function to merge CSV files while skipping headers for non-first files
def merge_csv_files(files):
    for i, file in enumerate(files):
        file_path = os.path.join(folder_path, file)
        try:
            with open(file_path, 'r', newline='', encoding='utf-8') as csv_file:
                csv_reader = csv.reader(csv_file)
                if i == 0:
                    merged_data.extend(list(csv_reader))
                else:
                    next(csv_reader)  # Skip the header for non-first files
                    merged_data.extend(list(csv_reader))
        except Exception as e:
            print(f"Error reading {file}: {e}")

# Merge the CSV files
merge_csv_files(csv_files)

# Save the merged data to a new CSV file
with open('merged_data.csv', 'w', newline='', encoding='utf-8') as merged_file:
    csv_writer = csv.writer(merged_file)
    csv_writer.writerows(merged_data)
