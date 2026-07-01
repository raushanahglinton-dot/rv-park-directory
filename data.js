// ============================================================
//  data.js — Small RV Parks USA
//  HOW TO ADD A NEW STATE:
//  1. Copy one of the state objects below as a template
//  2. Change the "state" field on every park entry
//  3. Push your changes — the site rebuilds automatically
//
//  REQUIRED FIELDS PER PARK:
//    name, city, county, state, region, type, sites,
//    hookup, phone, web, tags
//
//  VALID TYPES: "Private"
//
//  HOOKUP KEYWORDS (used by filter):
//    "Full hookups" | "Electric" | "Water" | "No hookups"
// ============================================================

const PARKS = [

  // ──────────────────────────────────────────────────────────
  //  TENNESSEE  (28 parks)
  // ──────────────────────────────────────────────────────────

  { name:"Mountain Glen RV Park", city:"Greeneville", county:"Greene", state:"Tennessee", region:"East TN", type:"Private", sites:45, hookup:"Full hookups, 50A, pull-throughs", phone:"(423) 234-0404", web:"mountainglenrv.com", tags:["Fishing pond","Pavilion","WiFi"] },
  { name:"Creekside RV Park", city:"Pigeon Forge", county:"Sevier", state:"Tennessee", region:"East TN", type:"Private", sites:42, hookup:"Full hookups (W/E/S), concrete pads", phone:"(865) 428-4801", web:"creeksidervpark.com", tags:["Little Pigeon River","Smokies"] },
  { name:"Up the Creek RV Camp", city:"Pigeon Forge", county:"Sevier", state:"Tennessee", region:"East TN", type:"Private", sites:60, hookup:"Full hookups, concrete pads, fire pits", phone:"(865) 453-8474", web:"upthecreekrvcamp.com", tags:["Smokies","Dollywood nearby"] },
  { name:"Mecca Camp Resort", city:"Tellico Plains", county:"Monroe", state:"Tennessee", region:"East TN", type:"Private", sites:50, hookup:"Full hookups, 30/50A", phone:"(423) 253-2266", web:"meccacampresort.com", tags:["Cherokee NF","Cherohala Skyway","Family events"] },
  { name:"Rivers Edge Campground", city:"Pigeon Forge", county:"Sevier", state:"Tennessee", region:"East TN", type:"Private", sites:60, hookup:"Full hookups, riverside sites", phone:"(865) 453-5734", web:"riversedgepigeonforge.com", tags:["Pigeon River","Smokies","Dollywood"] },
  { name:"Camp LeConte Luxury Outdoor Resort", city:"Gatlinburg", county:"Sevier", state:"Tennessee", region:"East TN", type:"Private", sites:55, hookup:"Full hookups, 30/50A, WiFi", phone:"(865) 436-6716", web:"campinggatlinburg.com", tags:["Gatlinburg","Pool","Hot tub","Smokies"] },
  { name:"Smoky Waters Campground", city:"Townsend", county:"Blount", state:"Tennessee", region:"East TN", type:"Private", sites:45, hookup:"Full hookups, pull-throughs", phone:"(865) 448-6421", web:"", tags:["Little River","Smokies gate","Quiet valley"] },
  { name:"Lakeview RV Resort", city:"Bluff City", county:"Sullivan", state:"Tennessee", region:"East TN", type:"Private", sites:50, hookup:"Full hookups (W/E/S), WiFi, 30/50A", phone:"(423) 538-7090", web:"lakeviewrvresort.net", tags:["Boone Lake","Tri-Cities area","Year-round"] },
  { name:"Raccoon Mountain Campground", city:"Chattanooga", county:"Hamilton", state:"Tennessee", region:"East TN", type:"Private", sites:70, hookup:"Full hookups, gravel pads, 30/50A", phone:"(423) 821-9403", web:"raccoonmountain.com", tags:["Chattanooga","Caverns","Mountain views"] },
  { name:"Long Creek Haven", city:"Newport", county:"Cocke", state:"Tennessee", region:"East TN", type:"Private", sites:20, hookup:"Full hookups, 30/50A, creek access", phone:"", web:"", tags:["Pigeon River tributary","Small park","Quiet"] },
  { name:"Bucks Ranch", city:"Telford", county:"Washington", state:"Tennessee", region:"East TN", type:"Private", sites:25, hookup:"Electric + water", phone:"", web:"", tags:["Rural East TN","Quiet","Small family park"] },
  { name:"Spring Lake RV Resort", city:"Spring City", county:"Rhea", state:"Tennessee", region:"East TN", type:"Private", sites:64, hookup:"Full hookups, 30/50A, WiFi, cable", phone:"(423) 365-6555", web:"", tags:["Watts Bar Lake","Monthly rates"] },
  { name:"Grand Ole RV Resort & Market", city:"Goodlettsville", county:"Davidson", state:"Tennessee", region:"Middle TN", type:"Private", sites:75, hookup:"Full hookups (W/E/S), gravel pads", phone:"(615) 851-4555", web:"grandolervresort.com", tags:["Nashville area","Live music","Restaurant"] },
  { name:"Two Rivers Campground", city:"Goodlettsville", county:"Davidson", state:"Tennessee", region:"Middle TN", type:"Private", sites:65, hookup:"Full hookups, WiFi", phone:"(615) 883-8559", web:"tworiverscampground.com", tags:["Nashville","Opryland area","Pool"] },
  { name:"RJourney Clarksville RV Resort", city:"Clarksville", county:"Montgomery", state:"Tennessee", region:"Middle TN", type:"Private", sites:97, hookup:"Full hookups, pull-throughs, 30/50A", phone:"(931) 774-7901", web:"rjourney.com", tags:["Fort Campbell area","Nashville day trip"] },
  { name:"Piney River Resort", city:"Dickson", county:"Dickson", state:"Tennessee", region:"Middle TN", type:"Private", sites:60, hookup:"Full hookups, concrete pads, riverfront sites", phone:"(931) 996-3431", web:"pineyriverresort.com", tags:["Piney River","Nashville day trip"] },
  { name:"Campers RV Park", city:"Spring Hill", county:"Maury", state:"Tennessee", region:"Middle TN", type:"Private", sites:50, hookup:"Full hookups, 30/50A", phone:"(615) 302-5775", web:"", tags:["Short-term & monthly","Nashville area"] },
  { name:"Country Life RV Parks and Services", city:"Clarkrange", county:"Fentress", state:"Tennessee", region:"Middle TN", type:"Private", sites:30, hookup:"Full hookups", phone:"(931) 863-3000", web:"", tags:["Rural","Monthly rates"] },
  { name:"Gracious Gardens RV Park", city:"Crossville", county:"Cumberland", state:"Tennessee", region:"Middle TN", type:"Private", sites:40, hookup:"Full hookups, 30/50A", phone:"(931) 707-7979", web:"", tags:["Cumberland Plateau","Monthly rates"] },
  { name:"Harmony Ridge RV Park", city:"Jamestown", county:"Fentress", state:"Tennessee", region:"Middle TN", type:"Private", sites:30, hookup:"Full hookups, 30/50A", phone:"(931) 879-8080", web:"", tags:["Big South Fork area","Rural","Monthly rates"] },
  { name:"Big Puckett's Campground & RV Park", city:"Cookeville", county:"Putnam", state:"Tennessee", region:"Middle TN", type:"Private", sites:35, hookup:"Full hookups, 30/50A", phone:"(931) 858-2253", web:"", tags:["Burgess Falls nearby","Caney Fork fishing"] },
  { name:"Tennessee River RV Resort", city:"Clifton", county:"Wayne", state:"Tennessee", region:"Middle TN", type:"Private", sites:40, hookup:"Full hookups, 30/50A, river access", phone:"", web:"", tags:["Tennessee River","Boat ramp"] },
  { name:"Coyote View RV Park", city:"Union City", county:"Obion", state:"Tennessee", region:"West TN", type:"Private", sites:30, hookup:"Full hookups, 30/50A", phone:"(731) 599-9898", web:"coyoteview.com", tags:["Reelfoot Lake area","RV repair on-site"] },
  { name:"Eagle's Nest RV Park", city:"Buchanan", county:"Henry", state:"Tennessee", region:"West TN", type:"Private", sites:33, hookup:"Full hookups (W/E/S), concrete pads, 30/50A", phone:"(731) 232-0222", web:"eaglesnesttn.com", tags:["Kentucky Lake","Fishing"] },
  { name:"Parker's Ridge RV Park", city:"Wildersville", county:"Henderson", state:"Tennessee", region:"West TN", type:"Private", sites:40, hookup:"Full hookups, 30/50A", phone:"(731) 986-4894", web:"", tags:["Rural West TN","Monthly rates"] },
  { name:"Graceland RV Park & Campground", city:"Memphis", county:"Shelby", state:"Tennessee", region:"West TN", type:"Private", sites:65, hookup:"Full hookups (W/E/S), pull-throughs", phone:"(901) 396-7125", web:"graceland.com/rv-park-campground", tags:["Memphis","Elvis Presley Blvd","Year-round"] },
  { name:"Thousand Trails Natchez Trace", city:"Hohenwald", county:"Lewis", state:"Tennessee", region:"West TN", type:"Private", sites:99, hookup:"Full hookups, 30/50A", phone:"(888) 707-1477", web:"thousandtrails.com", tags:["Membership park","Lake","Dog park","Pool"] },

  // ──────────────────────────────────────────────────────────
  //  ALABAMA  (8 parks)
  // ──────────────────────────────────────────────────────────

  { name:"Arrowhead RV Resort at Smith Lake", city:"Crane Hill", county:"Cullman", state:"Alabama", region:"North AL", type:"Private", sites:60, hookup:"Full hookups, 30/50A, lakeside sites", phone:"(256) 739-6767", web:"arrowheadsmithlake.com", tags:["Lewis Smith Lake","Boat dock","Bar & Grill","Fishing"] },
  { name:"Desoto Caverns Family Campground", city:"Childersburg", county:"Talladega", state:"Alabama", region:"North AL", type:"Private", sites:50, hookup:"Full hookups, 30A + some 50A", phone:"(256) 378-7252", web:"desotocavernspark.com", tags:["Caverns","Family activities","Talladega NF nearby"] },
  { name:"Noccalula Falls Campground", city:"Gadsden", county:"Etowah", state:"Alabama", region:"North AL", type:"Private", sites:94, hookup:"Full hookups (W/E/S), pull-throughs, 30/50A", phone:"(256) 549-4663", web:"gadsdenal.gov/noccalula-falls-park", tags:["Waterfall","Pioneer Village","Pool","Miniature train"] },
  { name:"Bama RV Park", city:"Tuscaloosa", county:"Tuscaloosa", state:"Alabama", region:"Central AL", type:"Private", sites:60, hookup:"Full hookups (W/E/S), 30/50A", phone:"(205) 556-6063", web:"", tags:["University town","I-20/59 corridor","Monthly rates"] },
  { name:"Bohamia Glamping & RV", city:"Talladega", county:"Talladega", state:"Alabama", region:"Central AL", type:"Private", sites:30, hookup:"Electric + water, 30/50A", phone:"", web:"bohamia.com", tags:["Talladega NF","Glamping","Quiet","NASCAR area"] },
  { name:"Winner's Circle RV Resort", city:"Theodore", county:"Mobile", state:"Alabama", region:"South AL", type:"Private", sites:99, hookup:"Full hookups (W/E/S), pull-throughs, 30/50A", phone:"(251) 653-9220", web:"", tags:["Mobile area","I-10 corridor","Monthly rates"] },
  { name:"Tropical Island RV Resort", city:"Foley", county:"Baldwin", state:"Alabama", region:"South AL", type:"Private", sites:85, hookup:"Full hookups, 30/50A, WiFi", phone:"(251) 943-3456", web:"", tags:["Gulf Shores area","Pool","15 min to beach"] },
  { name:"Lakeside Landing RV Park", city:"Guntersville", county:"Marshall", state:"Alabama", region:"North AL", type:"Private", sites:45, hookup:"Full hookups (W/E/S), 30/50A, waterfront sites", phone:"(256) 582-2622", web:"", tags:["Guntersville Lake","Fishing","Boat ramp"] },

  // ──────────────────────────────────────────────────────────
  //  NORTH CAROLINA  (10 parks)
  // ──────────────────────────────────────────────────────────

  { name:"Creekwood Farm RV Park", city:"Maggie Valley", county:"Haywood", state:"North Carolina", region:"Mountains NC", type:"Private", sites:55, hookup:"Full hookups, 30/50A, pull-throughs", phone:"(828) 926-7977", web:"creekwoodfarm.com", tags:["Nantahala NF gateway","Jonathan Creek","Cherokee area"] },
  { name:"Foxfire Mountain RV Sites", city:"Murphy", county:"Cherokee", state:"North Carolina", region:"Mountains NC", type:"Private", sites:40, hookup:"Full hookups, 30/50A, WiFi", phone:"(828) 835-9706", web:"foxfiremountain.com", tags:["Western NC","Mountain views","Quiet"] },
  { name:"Mama Gertie's Hideaway Campground", city:"Swannanoa", county:"Buncombe", state:"North Carolina", region:"Mountains NC", type:"Private", sites:60, hookup:"Full hookups, 30/50A, WiFi", phone:"(828) 686-4258", web:"campmamagertie.com", tags:["Asheville area","River access","Hiking","Annual events"] },
  { name:"Black Bear Campground", city:"Marion", county:"McDowell", state:"North Carolina", region:"Mountains NC", type:"Private", sites:75, hookup:"Full hookups (W/E/S), 30/50A, pull-throughs", phone:"(828) 652-7928", web:"blackbearnc.com", tags:["Linville Gorge area","Lake Tahoma","Pool","WiFi"] },
  { name:"Bear Den Campground", city:"Spruce Pine", county:"Mitchell", state:"North Carolina", region:"Mountains NC", type:"Private", sites:95, hookup:"Full hookups, 30/50A, pull-throughs", phone:"(828) 765-2888", web:"beardencampground.com", tags:["Blue Ridge Pkwy area","Gem mining nearby","Pool","WiFi"] },
  { name:"Asheville West KOA", city:"Candler", county:"Buncombe", state:"North Carolina", region:"Mountains NC", type:"Private", sites:85, hookup:"Full hookups (W/E/S), 30/50A, WiFi", phone:"(828) 665-7015", web:"koa.com/campgrounds/asheville-west", tags:["Asheville area","Pool","Mountain views"] },
  { name:"Hound's Campground", city:"Gastonia", county:"Gaston", state:"North Carolina", region:"Piedmont NC", type:"Private", sites:45, hookup:"Full hookups, 30/50A", phone:"(704) 922-5723", web:"", tags:["Crowders Mountain area","Charlotte day trip"] },
  { name:"Jordan Lake Campground & Marina", city:"Pittsboro", county:"Chatham", state:"North Carolina", region:"Piedmont NC", type:"Private", sites:60, hookup:"Full hookups, 30/50A, WiFi", phone:"(919) 542-5600", web:"jordanlakecampground.com", tags:["Jordan Lake","Boat ramp","Fishing","Raleigh area"] },
  { name:"Cape Hatteras KOA Resort", city:"Rodanthe", county:"Dare", state:"North Carolina", region:"Coastal NC", type:"Private", sites:90, hookup:"Full hookups (W/E/S), 30/50A, WiFi, pool", phone:"(252) 987-2307", web:"koa.com/campgrounds/cape-hatteras", tags:["Outer Banks","Beach access","Kiteboarding","Fishing"] },
  { name:"Frisco Woods Campground", city:"Frisco", county:"Dare", state:"North Carolina", region:"Coastal NC", type:"Private", sites:96, hookup:"Full hookups (W/E/S), 30/50A, WiFi", phone:"(252) 995-5208", web:"outer-banks.com/friscwoods", tags:["Outer Banks","Sound access","Windsurfing","Kiteboarding"] },

  // ──────────────────────────────────────────────────────────
  //  SOUTH CAROLINA  (7 parks)
  // ──────────────────────────────────────────────────────────

  { name:"The Point at Lake Hartwell RV Resort", city:"Townville", county:"Anderson", state:"South Carolina", region:"Upstate SC", type:"Private", sites:65, hookup:"Full hookups, 30/50A, waterfront sites", phone:"(864) 287-3376", web:"thepointatlakerv.com", tags:["Hartwell Lake","Boat ramp","Fishing","Swimming"] },
  { name:"Clemson RV Park at the Grove", city:"Clemson", county:"Pickens", state:"South Carolina", region:"Upstate SC", type:"Private", sites:97, hookup:"Full hookups (W/E/S), 30/50A, paved pads", phone:"(864) 654-2626", web:"clemsonrv.com", tags:["Clemson area","Lake Hartwell access","WiFi","Year-round"] },
  { name:"River Bottom Farms Campground", city:"Leesville", county:"Lexington", state:"South Carolina", region:"Midlands SC", type:"Private", sites:75, hookup:"Full hookups, 30/50A, pull-throughs", phone:"(803) 532-2854", web:"riverbottomfarms.com", tags:["Lake Murray area","Farm setting","Pool","Columbia day trip"] },
  { name:"Edmund RV Park", city:"Edmund", county:"Lexington", state:"South Carolina", region:"Midlands SC", type:"Private", sites:50, hookup:"Full hookups (W/E/S), 30/50A", phone:"(803) 732-0888", web:"", tags:["Congaree NP nearby","Lake Murray area","Monthly rates"] },
  { name:"Sesquicentennial State Park – Camp Lake Adger", city:"Columbia", county:"Richland", state:"South Carolina", region:"Midlands SC", type:"Private", sites:87, hookup:"Full hookups, 30/50A, WiFi", phone:"(803) 788-2706", web:"", tags:["Columbia area","Lake","Fishing","Quiet pines"] },
  { name:"Oaks at Point South RV Resort", city:"Yemassee", county:"Hampton", state:"South Carolina", region:"Lowcountry SC", type:"Private", sites:95, hookup:"Full hookups (W/E/S), 30/50A, pull-throughs", phone:"(843) 726-5728", web:"oaksatpointsouth.com", tags:["I-95 corridor","Hilton Head day trip","Pool","WiFi"] },
  { name:"Savannah Lakes RV Resort", city:"Hardeeville", county:"Jasper", state:"South Carolina", region:"Lowcountry SC", type:"Private", sites:90, hookup:"Full hookups (W/E/S), 30/50A, WiFi", phone:"(843) 784-2313", web:"savannahlakesrv.com", tags:["Near Savannah GA","Pool","Hot tub","Birding"] },

  // ──────────────────────────────────────────────────────────
  //  ADD YOUR NEXT STATE HERE
  //  Example template (copy and fill in):
  // ──────────────────────────────────────────────────────────
  //
  // { name:"Park Name",
  //   city:"City", county:"County", state:"Georgia",
  //   region:"North GA",
  //   type:"Private",
  //   sites:45,
  //   hookup:"Full hookups, 30/50A",
  //   phone:"(555) 123-4567",
  //   web:"parkwebsite.com",         // leave "" if no website
  //   tags:["Lake","Fishing","Quiet"]
  // },

];
