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
//  VALID TYPES: "Federal / NPS" | "State Park" |
//               "Corps of Engineers" | "Private"
//
//  HOOKUP KEYWORDS (used by filter):
//    "Full hookups" | "Electric" | "Water" | "No hookups"
// ============================================================

const PARKS = [

  // ──────────────────────────────────────────────────────────
  //  TENNESSEE  (73 parks)
  // ──────────────────────────────────────────────────────────

  // — Federal / Cherokee National Forest —
  { name:"Parksville Lake RV Campground", city:"Benton", county:"Polk", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:16, hookup:"Electric (30/50A), water", phone:"(423) 338-3300", web:"recreation.gov/camping/campgrounds/251438", tags:["Ocoee River","Cherokee NF","Ocoee Whitewater"] },
  { name:"Chilhowee Campground", city:"Benton", county:"Polk", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:75, hookup:"Electric, dump station", phone:"(423) 338-3300", web:"recreation.gov/camping/campgrounds/251723", tags:["Cherokee NF","Lake","OHV nearby"] },
  { name:"Indian Boundary Campground", city:"Vonore", county:"Monroe", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:88, hookup:"Electric + water, dump station", phone:"(423) 253-8400", web:"recreation.gov/camping/campgrounds/232215", tags:["Cherokee NF","Lake swimming","Hiking"] },
  { name:"Cardens Bluff Campground", city:"Hampton", county:"Carter", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:43, hookup:"Electric + water", phone:"(423) 725-4337", web:"recreation.gov/camping/campgrounds/122390", tags:["Cherokee NF","Watauga River"] },
  { name:"Dennis Cove Campground", city:"Hampton", county:"Carter", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:15, hookup:"No hookups", phone:"(423) 725-4337", web:"recreation.gov/camping/campgrounds/251724", tags:["Cherokee NF","Appalachian Trail"] },
  { name:"Houston Valley Campground", city:"Del Rio", county:"Cocke", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:10, hookup:"No hookups", phone:"(423) 638-4109", web:"recreation.gov/camping/campgrounds/122991", tags:["Cherokee NF","Remote"] },
  { name:"Katy Branch Campground", city:"Jonesborough", county:"Washington", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:18, hookup:"No hookups", phone:"(423) 638-4109", web:"recreation.gov/camping/campgrounds/122990", tags:["Cherokee NF"] },
  { name:"Horse Creek Recreation Area", city:"Chuckey", county:"Greene", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:14, hookup:"No hookups", phone:"(423) 638-4109", web:"recreation.gov/camping/campgrounds/10158738", tags:["Cherokee NF","Fishing","Tubing"] },
  { name:"Backbone Rock Campground", city:"Shady Valley", county:"Johnson", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:12, hookup:"No hookups", phone:"(423) 638-4109", web:"recreation.gov/camping/campgrounds/251757", tags:["Cherokee NF","Tunnel","Whitewater"] },

  // — Federal / Great Smoky Mountains NP —
  { name:"Cosby Campground", city:"Cosby", county:"Cocke", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:86, hookup:"No hookups, 25 ft max RV", phone:"(865) 436-1200", web:"recreation.gov/camping/campgrounds/232479", tags:["Great Smoky Mountains NP","No hookups"] },
  { name:"Cades Cove Campground", city:"Townsend", county:"Blount", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:92, hookup:"No hookups, flush toilets", phone:"(865) 436-1200", web:"recreation.gov/camping/campgrounds/232488", tags:["Great Smoky Mountains NP","Wildlife","Loop Road"] },

  // — Federal / Big South Fork —
  { name:"Bandy Creek Campground", city:"Oneida", county:"Scott", state:"Tennessee", region:"East TN", type:"Federal / NPS", sites:95, hookup:"Electric + water (95 RV sites), dump station", phone:"(423) 569-9778", web:"recreation.gov/camping/campgrounds/232506", tags:["Big South Fork NRA","Horse trails","Hiking"] },

  // — Corps of Engineers —
  { name:"Harpeth River Bridge Campground", city:"Ashland City", county:"Cheatham", state:"Tennessee", region:"Middle TN", type:"Corps of Engineers", sites:15, hookup:"Water + 50A electric, concrete pads", phone:"(615) 792-5697", web:"recreation.gov/camping/campgrounds/251574", tags:["Nashville area","Harpeth River"] },
  { name:"Cages Bend Campground", city:"Gallatin", county:"Sumner", state:"Tennessee", region:"Middle TN", type:"Corps of Engineers", sites:42, hookup:"Electric + water", phone:"(615) 824-4989", web:"recreation.gov/camping/campgrounds/232539", tags:["Old Hickory Lake"] },
  { name:"Lock A Campground", city:"Ashland City", county:"Cheatham", state:"Tennessee", region:"Middle TN", type:"Corps of Engineers", sites:45, hookup:"Electric + water, 30/50A", phone:"(615) 792-3715", web:"recreation.gov/camping/campgrounds/232700", tags:["Cheatham Lake"] },
  { name:"Anderson Road Campground", city:"Hermitage", county:"Davidson", state:"Tennessee", region:"Middle TN", type:"Corps of Engineers", sites:37, hookup:"Electric + water", phone:"(615) 889-1975", web:"recreation.gov/camping/campgrounds/232515", tags:["J. Percy Priest Lake"] },
  { name:"Long Branch Campground", city:"Lancaster", county:"Smith", state:"Tennessee", region:"Middle TN", type:"Corps of Engineers", sites:58, hookup:"Electric + water", phone:"(615) 548-4521", web:"recreation.gov/camping/campgrounds/232598", tags:["Center Hill Lake"] },
  { name:"Seven Points Campground", city:"Hermitage", county:"Davidson", state:"Tennessee", region:"Middle TN", type:"Corps of Engineers", sites:60, hookup:"Electric + water (30/50A)", phone:"(615) 889-5198", web:"recreation.gov/camping/campgrounds/232702", tags:["J. Percy Priest Lake","Nashville area"] },
  { name:"Bumpus Mills Campground", city:"Bumpus Mills", county:"Stewart", state:"Tennessee", region:"Middle TN", type:"Corps of Engineers", sites:22, hookup:"Electric + water", phone:"(931) 232-8831", web:"recreation.gov/camping/campgrounds/232537", tags:["Barkley Lake"] },
  { name:"Dover Campground", city:"Dover", county:"Stewart", state:"Tennessee", region:"Middle TN", type:"Corps of Engineers", sites:59, hookup:"Electric + water", phone:"(931) 232-8831", web:"recreation.gov/camping/campgrounds/232577", tags:["Lake Barkley"] },

  // — Tennessee State Parks —
  { name:"Indian Mountain State Park", city:"Jellico", county:"Campbell", state:"Tennessee", region:"East TN", type:"State Park", sites:47, hookup:"Full hookups, asphalt pads", phone:"(423) 784-7958", web:"tnstateparks.com/parks/indian-mountain", tags:["East TN gateway","Fishing","Hiking"] },
  { name:"Cove Lake State Park", city:"Caryville", county:"Campbell", state:"Tennessee", region:"East TN", type:"State Park", sites:93, hookup:"Electric + water, 40 ft max RV", phone:"(423) 566-9701", web:"tnstateparks.com/parks/cove-lake", tags:["Cumberland Gap area","Bird watching"] },
  { name:"Big Ridge State Park", city:"Maynardville", county:"Union", state:"Tennessee", region:"East TN", type:"State Park", sites:50, hookup:"Electric + water", phone:"(865) 992-5523", web:"tnstateparks.com/parks/big-ridge", tags:["Norris Lake"] },
  { name:"Panther Creek State Park", city:"Morristown", county:"Hamblen", state:"Tennessee", region:"East TN", type:"State Park", sites:50, hookup:"Electric + water (some sewer hookups)", phone:"(423) 587-7046", web:"tnstateparks.com/parks/panther-creek", tags:["Cherokee Lake","Biking trails"] },
  { name:"Davy Crockett Birthplace State Park", city:"Limestone", county:"Greene", state:"Tennessee", region:"East TN", type:"State Park", sites:88, hookup:"Electric + water, 45 ft max RV", phone:"(423) 257-2167", web:"tnstateparks.com/parks/davy-crockett-birthplace", tags:["Nolichucky River","History"] },
  { name:"Hiwassee/Ocoee Scenic River State Park", city:"Delano", county:"Polk", state:"Tennessee", region:"East TN", type:"State Park", sites:43, hookup:"Electric + water", phone:"(423) 263-0050", web:"tnstateparks.com/parks/hiwassee-ocoee", tags:["Ocoee Whitewater","Hiwassee River"] },
  { name:"Gee Creek Campground", city:"Delano", county:"Polk", state:"Tennessee", region:"East TN", type:"State Park", sites:47, hookup:"Electric + water", phone:"(423) 263-0050", web:"tnstateparks.com/parks/hiwassee-ocoee", tags:["Hiwassee River","Cherokee NF gateway"] },
  { name:"Bledsoe Creek State Park", city:"Gallatin", county:"Sumner", state:"Tennessee", region:"Middle TN", type:"State Park", sites:57, hookup:"Electric + water", phone:"(615) 452-3706", web:"tnstateparks.com/parks/bledsoe-creek", tags:["Old Hickory Lake"] },
  { name:"Henry Horton State Park", city:"Chapel Hill", county:"Marshall", state:"Tennessee", region:"Middle TN", type:"State Park", sites:63, hookup:"Electric + water", phone:"(931) 364-2222", web:"tnstateparks.com/parks/henry-horton", tags:["Duck River"] },
  { name:"Tims Ford State Park – Main", city:"Winchester", county:"Franklin", state:"Tennessee", region:"Middle TN", type:"State Park", sites:52, hookup:"Full hookups (W/E/S), paved pads", phone:"(931) 962-1183", web:"tnstateparks.com/parks/tims-ford", tags:["Lake views","Bass fishing","Bear Trace Golf"] },
  { name:"Tims Ford State Park – Fairview", city:"Winchester", county:"Franklin", state:"Tennessee", region:"Middle TN", type:"State Park", sites:80, hookup:"Full hookups, paved pads", phone:"(931) 962-1183", web:"tnstateparks.com/parks/tims-ford", tags:["Tims Ford Lake","8 mi from main park"] },
  { name:"Montgomery Bell State Park", city:"Burns", county:"Dickson", state:"Tennessee", region:"Middle TN", type:"State Park", sites:94, hookup:"Electric + water, 32 ft max RV", phone:"(615) 797-9052", web:"tnstateparks.com/parks/montgomery-bell", tags:["Nashville area","Fishing","Golf"] },
  { name:"Cumberland Mountain State Park", city:"Crossville", county:"Cumberland", state:"Tennessee", region:"Middle TN", type:"State Park", sites:99, hookup:"Water + electric, paved pads", phone:"(931) 484-6138", web:"tnstateparks.com/parks/cumberland-mountain", tags:["CCC history","Golf"] },
  { name:"Old Stone Fort State Park", city:"Manchester", county:"Coffee", state:"Tennessee", region:"Middle TN", type:"State Park", sites:51, hookup:"Electric + water", phone:"(931) 723-5073", web:"tnstateparks.com/parks/old-stone-fort", tags:["Archaeological site","Duck River"] },
  { name:"Standing Stone State Park", city:"Hilham", county:"Overton", state:"Tennessee", region:"Middle TN", type:"State Park", sites:36, hookup:"Electric + water", phone:"(931) 823-6347", web:"tnstateparks.com/parks/standing-stone", tags:["Lake","Fishing"] },
  { name:"Pickett State Park", city:"Jamestown", county:"Fentress", state:"Tennessee", region:"Middle TN", type:"State Park", sites:40, hookup:"Electric + water, 25 ft max RV", phone:"(931) 879-5821", web:"tnstateparks.com/parks/pickett", tags:["Rock arches","Backcountry"] },
  { name:"Mousetail Landing State Park – Main", city:"Linden", county:"Perry", state:"Tennessee", region:"Middle TN", type:"State Park", sites:25, hookup:"Full hookups, 55 ft max RV", phone:"(731) 847-0841", web:"tnstateparks.com/parks/mousetail-landing", tags:["Tennessee River"] },
  { name:"Mousetail Landing State Park – Spring Creek", city:"Linden", county:"Perry", state:"Tennessee", region:"Middle TN", type:"State Park", sites:21, hookup:"Electric + water, 90 ft max RV", phone:"(731) 847-0841", web:"tnstateparks.com/parks/mousetail-landing", tags:["Tennessee River"] },
  { name:"David Crockett State Park", city:"Lawrenceburg", county:"Lawrence", state:"Tennessee", region:"Middle TN", type:"State Park", sites:86, hookup:"Electric + water", phone:"(931) 762-9408", web:"tnstateparks.com/parks/david-crockett", tags:["Pool","Lake","Biking","Restaurant"] },
  { name:"Nathan Bedford Forrest State Park", city:"Eva", county:"Benton", state:"Tennessee", region:"West TN", type:"State Park", sites:51, hookup:"Electric + water", phone:"(731) 584-6356", web:"tnstateparks.com/parks/nathan-bedford-forrest", tags:["Kentucky Lake"] },
  { name:"Paris Landing State Park", city:"Buchanan", county:"Henry", state:"Tennessee", region:"West TN", type:"State Park", sites:63, hookup:"Electric + water, 40 ft max RV", phone:"(731) 641-4465", web:"tnstateparks.com/parks/paris-landing", tags:["Kentucky Lake","Lodge","Golf"] },
  { name:"Natchez Trace State Park – Pin Oak RV", city:"Wildersville", county:"Henderson", state:"Tennessee", region:"West TN", type:"State Park", sites:77, hookup:"Full hookups, 80 ft max RV, gravel", phone:"(731) 968-3742", web:"tnstateparks.com/parks/natchez-trace", tags:["Lake views","Long-haul rigs ok","Trails"] },
  { name:"Natchez Trace State Park – Wrangler Camp", city:"Wildersville", county:"Henderson", state:"Tennessee", region:"West TN", type:"State Park", sites:65, hookup:"Electric + water, 75 ft max RV", phone:"(731) 968-3742", web:"tnstateparks.com/parks/natchez-trace", tags:["Equestrian","Trails"] },
  { name:"Chickasaw State Park – RV Area", city:"Henderson", county:"Chester", state:"Tennessee", region:"West TN", type:"State Park", sites:26, hookup:"Full hookups, paved pads", phone:"(731) 989-5141", web:"tnstateparks.com/parks/chickasaw", tags:["Lake Placid","Highest terrain West TN"] },
  { name:"T.O. Fuller State Park", city:"Memphis", county:"Shelby", state:"Tennessee", region:"West TN", type:"State Park", sites:45, hookup:"Electric + water, 85 ft max RV", phone:"(901) 543-7581", web:"tnstateparks.com/parks/to-fuller", tags:["Memphis","Chucalissa"] },
  { name:"Pickwick Landing State Park", city:"Counce", county:"Hardin", state:"Tennessee", region:"West TN", type:"State Park", sites:48, hookup:"Electric + water", phone:"(731) 689-3129", web:"tnstateparks.com/parks/pickwick-landing", tags:["Pickwick Lake","Marina","Watersports"] },
  { name:"Reelfoot Lake State Park", city:"Tiptonville", county:"Lake", state:"Tennessee", region:"West TN", type:"State Park", sites:60, hookup:"Electric + water", phone:"(731) 253-9652", web:"tnstateparks.com/parks/reelfoot-lake", tags:["Bald eagles","Bald cypress","Unique geology"] },

  // — Private parks —
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
  //  ADD YOUR NEXT STATE HERE
  //  Example template (copy and fill in):
  // ──────────────────────────────────────────────────────────
  //
  // { name:"Park Name",
  //   city:"City", county:"County", state:"Georgia",
  //   region:"North GA",
  //   type:"Private",               // or "Federal / NPS", "State Park", "Corps of Engineers"
  //   sites:45,
  //   hookup:"Full hookups, 30/50A",
  //   phone:"(555) 123-4567",
  //   web:"parkwebsite.com",         // leave "" if no website
  //   tags:["Lake","Fishing","Quiet"]
  // },

];
