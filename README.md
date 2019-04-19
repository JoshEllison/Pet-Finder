# Pet-Finder
First project with API's
-------------------------------------------------------------------------------------------------------------------------------
This App was inspired by my own aspirations of addopting a puppy that I can name Cooper. I was suprised that a lot of the sites out there currently refer to puppies as 0-2 years old and have information overload. With the Pet Finder API I found a way to streamline my search and just view the relevant info. This App is a tool for me to easily screen puppies and go meet the ones I am interested in. I hope it can help you find your own furry friend!

Live Site
-------------------------------------------------------------------------------------------------------------------------------
https://docholliday211.github.io/Pet-Finder/

Approach Taken
-------------------------------------------------------------------------------------------------------------------------------
The user starts by entering the zip code they are interested in adopting and applying some simple filters. The page populates with pictures of available dogs that can be clicked to learn more about them. On click, the description and contact information is displayed in a Modal. 

Limitations
-------------------------------------------------------------------------------------------------------------------------------
The following usage restrictions apply to users of the API:

Total requests per day: 10,000
Records per request: 1,000
Maximum records per search: 2,000

As a trade off I limited the results to 300 per search so one user doesn't use up most of the requests by researching with different filters at 1000 results. Users will still be able to view past the 300 cap by changing filters and entering nearby zip codes.

Built With
-------------------------------------------------------------------------------------------------------------------------------
Ajax GET method to call petfinder API.
jQuery used to manipulate the DOM making the API data pull presentable to the end user.
HTML, CSS, and JS to tie everything together.
