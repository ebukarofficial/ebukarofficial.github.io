# Client Logos

This folder holds every logo shown in the "Trusted By" scrolling section on the homepage.

## Adding a new client logo

1. Save the logo as a **PNG with a transparent background**, ideally already white or light gray
   (the site displays them in flat gray, so a busy multi-color logo will still render correctly,
   but a clean transparent PNG gives the sharpest result).
2. Name the file simply, lowercase, hyphens instead of spaces — e.g. `nova-coffee.png`.
3. Upload it into this folder on GitHub (`images/clients/`).
4. Open `index.html`, find the `trust-marquee-track` div, and add ONE new line in **both**
   "Set 1" and "Set 2" (they must match exactly — Set 2 is what makes the scroll loop seamless):

   ```html
   <img class="trust-logo-img" src="images/clients/nova-coffee.png" alt="Nova Coffee logo">
   ```

5. Commit — the new logo appears in the scrolling strip automatically, same gray tone as the rest.

## Removing a client logo

Delete the file from this folder, then delete both matching `<img class="trust-logo-img" ...>`
lines from `index.html` (Set 1 and Set 2).

## Logos currently in the marquee (22)

African Food Network, Amarillo Travels, Bakery Shop, Beta Digitals, Blacmond Fashion,
Bystro Kravings, Clokit, Event Potters, Itaka's Empire, Karpilux, MAC Lawrence International,
Magen Collections, Maxwosleys Couture, Moss Daily, mtdWay, Nonivy, Revoult District,
Sarah Blach, Skeelpik, Skill Mountain Academy, Tag's Laundry, Tastia.

## Clients not yet in the marquee

These were only visible as small icons inside the combined Logo Folio graphic, so a clean
individual extraction wasn't possible: The Levite's House, The Brand Chop, BK Bathrooms &
Kitchens, Everest Potters, Youth Alive Empowerment, Guinaty Closet, Patriot TV, GCCDCi, BLCK,
Bluesky Roofing, Konclave, Early Bird Farms, TOWS, Ogenna, May.i, Havillah, Printos Kitchen, PC.

If you have the original individual logo file for any of these, upload it here and follow the
steps above — same process, better quality than trying to crop it out of the folio graphic.
