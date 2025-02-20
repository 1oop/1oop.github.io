interface AsciiArtProps {
  className?: string;
}

export const GopherArt: React.FC<AsciiArtProps> = ({ className }) => (
  <pre className={`text-[#81a9ff] text-xs leading-none ${className}`}>
    {`
     ,_---~~~~~----._         
  _,,_,*^____      _____\`*g*\"*, 
 / __/ /'     ^.  /      \\ ^@q   f 
[  @f | @))    |  | @))   l  0 _/  
 \\\`/   \\\~____ / __ \\_____/    \\   
  |           _l__l_           I   
  }          [______]           I  
  ]            | | |            |  
  ]             ~ ~             |  
  |                            | 
   |                           |
    `}
  </pre>
);


export const RocketArt: React.FC<AsciiArtProps> = ({ className }) => (
  <pre className={`text-[#ce9178] text-xs leading-none ${className}`}>
    {`
           !
           !
           ^
          / \\
         /___\\
        |=   =|
        |     |
        |     |
        |     |
        |     |
        |     |
        |     |
        |     |
        |     |
        |     |
       /|##!##|\\
      / |##!##| \\
     /  |##!##|  \\
    |  / ^ | ^ \\  |
     \`/  ( | )  \\'
    `}
  </pre>
);
