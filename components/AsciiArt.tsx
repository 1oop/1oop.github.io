interface AsciiArtProps {
  className?: string;
}

export const GopherArt: React.FC<AsciiArtProps> = ({ className }) => (
  <pre className={`text-[#64dd17] text-xs leading-none ${className}`}>
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

export const ComputerArt: React.FC<AsciiArtProps> = ({ className }) => (
  <pre className={`text-[#42a5f5] text-xs leading-none ${className}`}>
    {`
     .-------------------.
     |.------------------.|
     ||      1oop.dev    ||
     ||                  ||
     ||        []        ||
     ||                  ||
     |'------------------'|
     \`-------------------'
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
