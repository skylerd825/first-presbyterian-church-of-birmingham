import os
import sys
import plistlib

def downgrade_ipa(plist_path):
    print(f"Reading manifest file: {plist_path}")
    try:
        with open(plist_path, 'rb') as fp:
            pl = plistlib.load(fp)
        
        pl['MinimumOSVersion'] = '2.0'
        
        with open(plist_path, 'wb') as fp:
            plistlib.dump(pl, fp)
        print("Successfully structured target architecture for iOS 2.0 legacy environment.")
    except Exception as e:
        print(f"Error handling manifest conversion: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        downgrade_ipa(sys.argv[1])
    else:
        print("Usage: python converter.py <path_to_info_plist>")
