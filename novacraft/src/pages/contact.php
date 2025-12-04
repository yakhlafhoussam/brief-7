<div class="w-screen h-full bg-[#EFF0F0] flex flex-col justify-center items-center gap-10 relative">
    <img id="eye" class="w-5 h-5 fixed cursor-pointer top-10" src="/assets/img/eye.png">
    <div id="toast" class="flex gap-2 bg-green-600 text-white px-4 py-3 rounded-lg absolute top-10 -left-80">
        <span class="font-semibold">Success:</span><h1>Your message has been sent!</h1>
    </div>
    <div id="toast0" class="flex gap-2 bg-red-600 text-white px-4 py-3 rounded-lg absolute top-10 -left-80">
        <span class="font-semibold">Error:</span><h1>Please fill all fields!</h1>
    </div>
    <h1 class="font-inter font-bold text-5xl text-black">Contact us</h1>
    <form class="w-11/12 flex flex-col justify-center items-center gap-8">
        <div class="w-11/12 h-16">
            <input class="rounded-full w-full h-full px-8 border border-solid" type="text" name="name" id="name"
                placeholder="Your Name...">
        </div>
        <div class="w-11/12 h-16">
            <input class="rounded-full w-full h-full px-8 border border-solid" type="text" name="email" id="email"
                placeholder="Your Email...">
        </div>
        <div class="w-11/12 h-32">
            <textarea placeholder="Your message..." class="rounded-3xl w-full h-full px-8 py-3 border border-solid"
                name="msg" id="msg"></textarea>
        </div>
    </form>
    <button id="send" class="bg-black px-10 py-5 rounded-full font-inter font-bold text-xl text-white hover:bg-slate-800">SEND</button>
</div>
<div id="cm" class="fixed bg-black w-screen h-full hidden flex-col gap-5 justify-center items-center">
    <h1 id="cl" class="px-4 py-2 text-white bg-red-600 rounded-full fixed top-5 cursor-pointer">Close</h1>
    <div id="s" class="flex flex-col justify-center items-center gap-10 w-11/12">
        <input id="pass" class="rounded-full w-1/2 h-10 px-8 border border-solid text-center" type="password">
        <button id="check" class="bg-white p-4 rounded-full">010010000101100101001011010100110100000101001010</button>
    </div>
    <div id="displayh" class="hidden flex-col justify-center items-center w-1/2 h-1/2 gap-5 bg-gray-100 p-10 rounded-3xl overflow-auto"></div>
</div>