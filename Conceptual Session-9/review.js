document.querySelector('#submit-btn').addEventListener('click', function () {
    // console.log('clicked');
    const textAreaElement = document.getElementById('text-area');
    const areaValue = textAreaElement.value; //textareaর মধ্যে যা লিখব তা এখানে স্টোর করলাম।
    //এবার একটা p tag create করে, এর মধ্যে textareaর মধ্যকার টেক্সট রাখব।
    const p = document.createElement('p');
    p.innerText = areaValue;
    //এখন div টাকে ধরে, এর মধ্যে p tag টাকে append করে দিব।
    const container = document.getElementById('review');
    container.appendChild(p);
    // textareaর ভিতরের লেখা submit করার পর রিমোভ করে দিব।
    document.getElementById('text-area').value = '';
})
// Enter press করে সাবমিট করার উপায়ঃ
document.getElementById('text-area').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        const textAreaElement = document.getElementById('text-area');
        const areaValue = textAreaElement.value;
        const p = document.createElement('p');
        p.innerText = areaValue;
        const container = document.getElementById('review');
        container.appendChild(p);
        document.getElementById('text-area').value = '';
    }
})