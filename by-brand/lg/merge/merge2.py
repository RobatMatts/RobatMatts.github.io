import pandas as pd
import os

# Specify the folder where the CSV files are located
folder_path = '.'

# Get a list of all CSV files in the folder
csv_files = [file for file in os.listdir(folder_path) if file.endswith('.csv')]

# Initialize an empty DataFrame to store the merged data
merged_data = pd.DataFrame()

# Iterate through the list of CSV files and concatenate them
for i, file in enumerate(csv_files):
    file_path = os.path.join(folder_path, file)
    try:
        df = pd.read_csv(file_path, encoding='utf-8' if i == 0 else 'latin-1', header=0 if i == 0 else None)
        merged_data = pd.concat([merged_data, df], ignore_index=True)
    except Exception as e:
        print(f"Error reading {file}: {e}")

# Save the merged data to a new CSV file
merged_data.to_csv('merged_data.csv', index=False)
