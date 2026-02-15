fruits = ["apple", "banana", "cherry","date", "elderberry"]
print(fruits)
print(fruits[0])
print(fruits[4])

fruits.append("fig")
print(fruits)
fruits.remove("banana")
print(fruits)



numbers = [10,20,30,40,50,60,70,80,90]
numbers.append(100)
print(numbers)
numbers.insert(0, 5)
print(numbers)
numbers.remove(30)
print(numbers)
numbers.reverse()
print(numbers)
print(numbers.index(50))

temp = [72,68,75,70,78,74,71]
print(max(temp))
print(min(temp))