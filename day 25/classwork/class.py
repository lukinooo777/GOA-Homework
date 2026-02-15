def transform_text():
    text = input("შეიყვანეთ ტექსტი: ") 

    lowercase_text = text.lower()
    print(f"მცირე ასოებით: {lowercase_text}")

    uppercase_text = text.upper()
    print(f"დიდი ასოებით: {uppercase_text}")

    capitalized_text = text.capitalize()
    print(f"პირველი სიმბოლო დიდი: {capitalized_text}")

    word = input("შეიყვანეთ სიტყვა, რომლის მოძებნაც გსურთ: ")
    index = text.find(word)  
    if index != -1:
        print(f"სიტყვა '{word}' მდებარეობს ინდექსზე: {index}")
    else:
        print(f"სიტყვა '{word}' არ მოიძებნა ტექსტში.")

transform_text()