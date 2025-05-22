export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-900 via-green-800 to-amber-900">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="mb-12">
            <h1 className="font-cinzel text-5xl md:text-7xl font-semibold text-amber-200 mb-4 drop-shadow-2xl">
              A Message from the Shire
            </h1>
            <p className="font-crimson text-xl md:text-2xl text-amber-100/90 italic">
              To Aragorn, Son of Arathorn, Heir of Isildur
            </p>
          </div>

          <div className="bg-amber-50/95 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-2xl border border-amber-200/50">
            <div className="space-y-6 text-left">
              <p className="font-crimson text-lg md:text-xl text-amber-900 leading-relaxed">
                <span className="font-semibold">My Dear Friend Strider,</span>
              </p>
              
              <p className="font-crimson text-lg md:text-xl text-amber-900 leading-relaxed">
                I write to you from the edge of darkness, where the very air grows thick and the 
                shadows seem to whisper of ancient evils. Sam and I press onward toward Mount Doom, 
                though each step grows heavier than the last. The Ring&apos;s weight is not merely upon 
                my neck, but upon my very soul.
              </p>

              <p className="font-crimson text-lg md:text-xl text-amber-900 leading-relaxed">
                I think often of our time together, of your steady guidance through Bree and beyond. 
                Your words of courage echo in my mind when all seems lost. &ldquo;All we have to decide is 
                what to do with the time that is given us&rdquo; - how true those words ring now, in this 
                desolate place.
              </p>

              <p className="font-crimson text-lg md:text-xl text-amber-900 leading-relaxed">
                I hope this letter finds you well, wherever your path has led you. Perhaps you are 
                already at the Black Gate, drawing Sauron&apos;s eye away from us. Know that I carry not 
                just the Ring, but the hope of all free peoples, and the memory of your friendship 
                gives me strength.
              </p>

              <p className="font-crimson text-lg md:text-xl text-amber-900 leading-relaxed">
                Should I not return to see the green fields of the Shire again, please know that 
                every step toward Mount Doom is taken with the knowledge that Middle-earth has 
                protectors like you. Kings in exile who choose to serve rather than rule, friends 
                who guide lost hobbits through dark forests and darker times.
              </p>

              <p className="font-crimson text-lg md:text-xl text-amber-900 leading-relaxed mb-8">
                Until we meet again, may the light of Eärendil shine upon your path.
              </p>

              <div className="text-right">
                <p className="font-cinzel text-xl text-amber-800 font-medium">
                  Your faithful friend,
                </p>
                <p className="font-cinzel text-2xl text-amber-800 font-semibold mt-2">
                  Frodo Baggins
                </p>
                <p className="font-crimson text-sm text-amber-700 italic mt-1">
                  Ring-bearer of the Fellowship
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-4 text-amber-200/80">
            <div className="w-2 h-2 bg-amber-200 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-amber-200 rounded-full animate-pulse delay-75"></div>
            <div className="w-2 h-2 bg-amber-200 rounded-full animate-pulse delay-150"></div>
          </div>

          <p className="font-crimson text-sm text-amber-100/70 italic">
&ldquo;Even the smallest person can change the course of the future.&rdquo;
          </p>
        </div>
      </div>
    </main>
  )
}