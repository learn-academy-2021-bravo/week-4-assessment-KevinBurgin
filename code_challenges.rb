# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
letter_t = 't'

# create a function called contains 
def contains (array, string)
# use select method to filter over array
     array.select do |value|
# use include? to see if the array includes string
        value.include? string
     end
end
p contains(beverages_array, letter_o)
p contains(beverages_array,letter_t)


# Expected output: ['coffee', 'soda water']

# Expected output: ['tea', 'water', 'soda water']



# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# create a function only_vowels
def only_vowels (string)
# set variable with string split
    string_arr = string.split('') 
# use .each_with_index method to iterate over index and return value
    string_arr.each_with_index do |value, index|
# conditional if it includes vowels if it does return nothing
      if "aeiouAEIOU".include?(value)
        string_arr[index] = nil
      end
    end
# use join method join arr into string
    new_string = string_arr.join
# return string
    return new_string
end
p only_vowels(album1)
p only_vowels(album2)
p only_vowels(album3)




# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# create a class called Bike
class Bike 
# initialize model wheels and speed
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = wheels
        @current_speed = 0
    end
# create a methode to get info about bike
    def get_info 
        "#{@model}, #{@wheels}, #{@current_speed}"
    end
end

new_bike = Bike.new('Haro', 2, nil)
p new_bike.get_info


# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# create a class called Bike
class Bike 
# initialize model wheels speed set to 0
    def initialize(model, wheels, current_speed)
        @model = model
        @wheels = wheels
        @current_speed = 0
    end
# create method to increase speed by 1
    def pedal_faster
        @current_speed = @current_speed+1
    end
# create method to decrease speed by 0
    def brake
# conditional if speed is greater than 0 return speed -1 if not return 0
        if @current_speed>0
        return @current_speed = @current_speed-1
        else
            return 0
        end
    end
    def get_info 
        "#{@model}, #{@wheels}, #{@current_speed}"
    end
end

new_bike = Bike.new('Haro', 2, nil)

p new_bike.brake

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0


