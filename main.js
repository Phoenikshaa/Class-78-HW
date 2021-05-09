var images = ["https://images.app.goo.gl/93tDoocG2yW3z48WA","https://images.app.goo.gl/7jYYv9DVEmjy3F5D9", "https://images.app.goo.gl/gzFrRPhcwK8cm4Wh7" , "https://images.app.goo.gl/yBJoGqyDKFpWGRJa6", "https://images.app.goo.gl/2srK6WhoKc98qZVk8"];
var names = ["Family Book","Kylie Cantrall", "Ariana Grande", "Billie Eilish", "Pilar Pascual"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
