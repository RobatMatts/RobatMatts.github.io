import pandas as pd
import glob

# List of CSV files in a directory
csv_files = glob.glob('*.csv')

# Initialize an empty DataFrame to store the merged data
merged_data = pd.DataFrame()

# Iterate through the list of CSV files and concatenate them
for file in csv_files:
    try:
        df = pd.read_csv(file, encoding='utf-8')  # Read each CSV file with the specified encoding
    except UnicodeDecodeError:
        print(f"Error decoding {file}. Trying a different encoding...")
        try:
            df = pd.read_csv(file, encoding='latin-1')  # Try 'latin-1' encoding
        except Exception as e:
            print(f"Error reading {file}: {e}")
    merged_data = pd.concat([merged_data, df], ignore_index=True)

# Save the merged data to a new CSV file
merged_data.to_csv('merged_data.csv', index=False)
