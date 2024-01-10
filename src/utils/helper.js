
export const generateRandomWords = ()=>{
    var things = ['Rock', 'Paper', 'Scissor','Sam','Cart','John','Alan','Eva'];
    return things[Math.floor(Math.random()*things.length)];
}

export function generateRadomStrings(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
    }
    return result;
    }