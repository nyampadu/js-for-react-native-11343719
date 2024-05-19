function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1
        };
    });
}

//'map' returns a new array consisting of user profiles

// Test for names and modified names
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "david", "EVE"];
console.log(createUserProfiles(names, modifiedNames));