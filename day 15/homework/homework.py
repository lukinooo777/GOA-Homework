
number = int(input("Enter your number"))

if number > 0:
    print("positive")
elif number < 0:
    print("negative")


score = int(input("Enter your score"))
if score  > 90:
     print("your grade is A") 
elif score > 80 < 90:
     print("your grade is B")
elif score > 70 < 80:
      print("your grade is C")
elif score < 70:
       print("your grade is D")     




year = int(input("Enter your year"))
if  year // 4:
    print("this year is nakiani")
elif year // 100:
     print("this year is not nakiani")