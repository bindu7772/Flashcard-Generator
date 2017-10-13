function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
    this.partial = function () {
        if (text.includes(cloze)) {
            console.log(text.replace(cloze, "....."));
        }
        else {
            console.log("Please enter valid ans..")
        }
    }
}

module.exports = ClozeCard;
