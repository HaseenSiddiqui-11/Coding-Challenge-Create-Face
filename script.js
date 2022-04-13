const allFaces = []
x = 0;
let showAllButtonPressed = false;
function createFace() {

    var faceShape = prompt("What kind of shape do you want the face to be?").toLowerCase();
    var faceColor = prompt("What color do you want the face to be?").toLowerCase();
    var faceFeelings = prompt("Do you want the face to be happy or sad?").toLowerCase();

    var faceElement = document.createElement("DIV");
    faceElement.id = "face";

    faceElement.style.width = "200px";
    faceElement.style.height = "200px";
    faceElement.style.border = "1px solid black";
    faceElement.style.backgroundColor = faceColor;

    if (faceShape == "circle") {
        faceElement.style.borderRadius = "50%";
    }

    var faceFeelingDiv = document.createElement("DIV");
    faceFeelingDiv.style.border = "1px solid black";

    faceFeelingDiv.style.position = "relative";
    faceFeelingDiv.style.top = "140px"
    faceFeelingDiv.style.left = "25px"
    faceFeelingDiv.style.backgroundColor = "white";

    switch (faceFeelings) {
        case ("happy"):
            faceFeelingDiv.style.width = "150px";
            faceFeelingDiv.style.height = "25px";

            faceFeelingDiv.style.borderBottomLeftRadius = "50%";
            faceFeelingDiv.style.borderBottomRightRadius = "50%";

            break;

        case ("sad"):
            faceFeelingDiv.style.width = "150px";
            faceFeelingDiv.style.height = "25px";

            faceFeelingDiv.style.borderTopLeftRadius = "50%";
            faceFeelingDiv.style.borderTopRightRadius = "50%";

            break;
    }

    faceElement.appendChild(faceFeelingDiv);

    document.body.appendChild(faceElement);
    allFaces.push(faceElement);
};

function deleteFace() {
    x++;
    allFaces[allFaces.length - x].style.display = "none";
};

function copyFace() {
    y = 0;
    y++;
    var recentFaceVisible = allFaces[allFaces.length - y];
    while (recentFaceVisible.style.display == "none") {
        y++;
        recentFaceVisible = allFaces[allFaces.length - y];
    };

    var faceElement = document.createElement("DIV")
    faceElement.innerHTML = recentFaceVisible.innerHTML;
    faceElement.style.backgroundColor = recentFaceVisible.style.backgroundColor;

    faceElement.style.width = recentFaceVisible.style.width;
    faceElement.style.height = recentFaceVisible.style.height;
    faceElement.style.border = recentFaceVisible.style.border;
    faceElement.style.borderRadius = recentFaceVisible.style.borderRadius;

    allFaces.push(faceElement);

    document.body.appendChild(faceElement);


};
function showAllRecentFaces() {
    if (showAllButtonPressed == false){
        for (var i = 0; i < allFaces.length; i++) {
            if (allFaces[i].style.display == "none"){
                allFaces[i].style.display = "block";
                allFaces[i].faceDeleted = true;
            }
    
        }

        showAllButtonPressed = true;


    }

    else {
        for (var i = 0; i < allFaces.length; i++) {
            if (allFaces[i].faceDeleted == true){
                allFaces[i].style.display = "none"; 
            }
        }

        showAllButtonPressed = false;
    }
  
};
