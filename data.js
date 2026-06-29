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
  //  ALABAMA  (55 parks)
  // ──────────────────────────────────────────────────────────

  // — Federal / Talladega National Forest —
  { name:"Coleman Lake Recreation Area", city:"Heflin", county:"Cleburne", state:"Alabama", region:"North AL", type:"Federal / NPS", sites:39, hookup:"Electric + water", phone:"(256) 463-2272", web:"recreation.gov/camping/campgrounds/232358", tags:["Talladega NF","Fishing","Swimming beach"] },
  { name:"Payne Lake Recreation Area", city:"Bankston", county:"Fayette", state:"Alabama", region:"North AL", type:"Federal / NPS", sites:52, hookup:"Electric + water", phone:"(205) 489-5111", web:"recreation.gov/camping/campgrounds/10157960", tags:["Talladega NF","Swimming beach","Fishing"] },
  { name:"Pine Glen Recreation Area", city:"Heflin", county:"Cleburne", state:"Alabama", region:"North AL", type:"Federal / NPS", sites:25, hookup:"No hookups", phone:"(256) 463-2272", web:"recreation.gov/camping/campgrounds/232361", tags:["Talladega NF","Hiking","Quiet"] },

  // — Federal / Bankhead National Forest —
  { name:"Corinth Recreation Area", city:"Double Springs", county:"Winston", state:"Alabama", region:"North AL", type:"Federal / NPS", sites:50, hookup:"Electric (30/50A) + water, dump station, 35+ ft ok", phone:"(205) 489-5111", web:"recreation.gov/camping/campgrounds/232297", tags:["Bankhead NF","Lewis Smith Lake","Swimming"] },
  { name:"Brushy Lake Recreation Area", city:"Double Springs", county:"Winston", state:"Alabama", region:"North AL", type:"Federal / NPS", sites:12, hookup:"No hookups", phone:"(205) 489-5111", web:"recreation.gov/camping/campgrounds/232287", tags:["Bankhead NF","Sipsey Wilderness","Remote"] },
  { name:"Clear Creek Recreation Area", city:"Arley", county:"Winston", state:"Alabama", region:"North AL", type:"Federal / NPS", sites:99, hookup:"Electric (30/50A) + water, dump station", phone:"(205) 489-5111", web:"recreation.gov/camping/campgrounds/232288", tags:["Bankhead NF","Lewis Smith Lake","Swimming beach","Boat ramp"] },

  // — Federal / Conecuh National Forest —
  { name:"Open Pond Recreation Area", city:"Florala", county:"Covington", state:"Alabama", region:"South AL", type:"Federal / NPS", sites:65, hookup:"Electric + water (some sites), primitive available", phone:"(334) 222-2555", web:"recreation.gov/camping/campgrounds/232384", tags:["Conecuh NF","Swimming","Fishing","Canoe trail"] },

  // — Federal / Tuskegee National Forest —
  { name:"Taska Recreation Area", city:"Tuskegee", county:"Macon", state:"Alabama", region:"Central AL", type:"Federal / NPS", sites:12, hookup:"Electric + water", phone:"(334) 727-2652", web:"recreation.gov/camping/campgrounds/232429", tags:["Tuskegee NF","Historic area","Fishing"] },

  // — Corps of Engineers —
  { name:"Honeycomb Creek Campground", city:"Grant", county:"Marshall", state:"Alabama", region:"North AL", type:"Corps of Engineers", sites:78, hookup:"Electric + water", phone:"(256) 582-2135", web:"recreation.gov/camping/campgrounds/232270", tags:["Guntersville Lake","Fishing","Swimming"] },
  { name:"Seibold Creek Campground", city:"Scottsboro", county:"Jackson", state:"Alabama", region:"North AL", type:"Corps of Engineers", sites:24, hookup:"Electric + water", phone:"(256) 574-2980", web:"recreation.gov/camping/campgrounds/232286", tags:["Guntersville Lake","Quiet","Boat ramp"] },
  { name:"Town Creek Campground", city:"Scottsboro", county:"Jackson", state:"Alabama", region:"North AL", type:"Corps of Engineers", sites:36, hookup:"Electric + water", phone:"(256) 574-2980", web:"recreation.gov/camping/campgrounds/232285", tags:["Guntersville Lake","Boat ramp"] },
  { name:"Elk River Campground", city:"Rogersville", county:"Lauderdale", state:"Alabama", region:"North AL", type:"Corps of Engineers", sites:61, hookup:"Electric + water", phone:"(256) 247-1184", web:"recreation.gov/camping/campgrounds/232291", tags:["Wheeler Lake","TVA corridor"] },
  { name:"Mallard Creek Campground", city:"Florence", county:"Lauderdale", state:"Alabama", region:"North AL", type:"Corps of Engineers", sites:40, hookup:"Electric + water", phone:"(256) 247-1184", web:"recreation.gov/camping/campgrounds/232292", tags:["Wheeler Lake","Fishing"] },
  { name:"Forkland Park", city:"Forkland", county:"Greene", state:"Alabama", region:"Central AL", type:"Corps of Engineers", sites:34, hookup:"Electric + water", phone:"(334) 289-5535", web:"recreation.gov/camping/campgrounds/232307", tags:["Demopolis Lake","Black Warrior River","Boat ramp"] },
  { name:"Foscue Creek Campground", city:"Demopolis", county:"Marengo", state:"Alabama", region:"Central AL", type:"Corps of Engineers", sites:43, hookup:"Electric + water", phone:"(334) 289-5535", web:"recreation.gov/camping/campgrounds/232308", tags:["Demopolis Lake","Fishing"] },
  { name:"Jennings Ferry Campground", city:"Brent", county:"Bibb", state:"Alabama", region:"Central AL", type:"Corps of Engineers", sites:51, hookup:"Electric (50A) + water", phone:"(205) 926-9808", web:"recreation.gov/camping/campgrounds/232311", tags:["Black Warrior River","Fishing","Quiet"] },
  { name:"Chilatchee Creek Campground", city:"Camden", county:"Wilcox", state:"Alabama", region:"South AL", type:"Corps of Engineers", sites:36, hookup:"Electric + water", phone:"(334) 682-4244", web:"recreation.gov/camping/campgrounds/232309", tags:["Miller's Ferry","Alabama River","Remote"] },
  { name:"Gunter Hill Campground", city:"Montgomery", county:"Elmore", state:"Alabama", region:"Central AL", type:"Corps of Engineers", sites:91, hookup:"Electric + water (30/50A)", phone:"(334) 269-1053", web:"recreation.gov/camping/campgrounds/232310", tags:["Woodruff Lake","Montgomery area","Boat ramp"] },

  // — Alabama State Parks —
  { name:"DeSoto State Park", city:"Fort Payne", county:"DeKalb", state:"Alabama", region:"North AL", type:"State Park", sites:94, hookup:"Full hookups (W/E/S), paved pads", phone:"(256) 845-5380", web:"alapark.com/parks/desoto-state-park", tags:["Little River Canyon","Waterfalls","Hiking","Lookout Mtn"] },
  { name:"Monte Sano State Park", city:"Huntsville", county:"Madison", state:"Alabama", region:"North AL", type:"State Park", sites:89, hookup:"Electric + water (17 full hookup)", phone:"(256) 534-3757", web:"alapark.com/parks/monte-sano-state-park", tags:["Huntsville","Mountain views","Hiking","Observatory"] },
  { name:"Lake Guntersville State Park", city:"Guntersville", county:"Marshall", state:"Alabama", region:"North AL", type:"State Park", sites:94, hookup:"Full hookups (W/E/S), paved pads", phone:"(256) 571-5444", web:"alapark.com/parks/lake-guntersville-state-park", tags:["Guntersville Lake","Bald eagles","Golf","Lodge"] },
  { name:"Cathedral Caverns State Park", city:"Grant", county:"Marshall", state:"Alabama", region:"North AL", type:"State Park", sites:93, hookup:"Electric + water", phone:"(256) 728-8193", web:"alapark.com/parks/cathedral-caverns-state-park", tags:["Caverns","Giant stalagmites","Unique geology"] },
  { name:"Rickwood Caverns State Park", city:"Warrior", county:"Jefferson", state:"Alabama", region:"North AL", type:"State Park", sites:27, hookup:"Electric + water", phone:"(205) 647-9692", web:"alapark.com/parks/rickwood-caverns-state-park", tags:["Caverns","Swimming pool","Historic"] },
  { name:"Bucks Pocket State Park", city:"Grove Oak", county:"DeKalb", state:"Alabama", region:"North AL", type:"State Park", sites:36, hookup:"Electric + water", phone:"(256) 659-2000", web:"alapark.com/parks/bucks-pocket-state-park", tags:["Gorge","Fishing","Remote feel","Quiet"] },
  { name:"Cheaha State Park – Upper Campground", city:"Delta", county:"Cleburne", state:"Alabama", region:"North AL", type:"State Park", sites:40, hookup:"Full hookups (W/E/S), 20/30/50A", phone:"(256) 488-5111", web:"alapark.com/parks/cheaha-state-park", tags:["Highest point in AL","Scenic views","Hiking","Year-round"] },
  { name:"Cheaha State Park – Lower Campground", city:"Delta", county:"Cleburne", state:"Alabama", region:"North AL", type:"State Park", sites:32, hookup:"Full hookups (W/E/S), near Cheaha Lake", phone:"(256) 488-5111", web:"alapark.com/parks/cheaha-state-park", tags:["Cheaha Lake","Talladega NF","April–December"] },
  { name:"Oak Mountain State Park", city:"Pelham", county:"Shelby", state:"Alabama", region:"Central AL", type:"State Park", sites:85, hookup:"Electric + water", phone:"(205) 620-2520", web:"alapark.com/parks/oak-mountain-state-park", tags:["Birmingham area","Mountain biking","Fishing","Demo forest"] },
  { name:"Chewacla State Park", city:"Auburn", county:"Lee", state:"Alabama", region:"Central AL", type:"State Park", sites:36, hookup:"Electric + water, cable TV", phone:"(334) 887-5621", web:"alapark.com/parks/chewacla-state-park", tags:["Auburn area","Swimming","Waterfall","Fishing"] },
  { name:"Paul M. Grist State Park", city:"Selma", county:"Dallas", state:"Alabama", region:"Central AL", type:"State Park", sites:31, hookup:"Electric + water", phone:"(334) 872-5846", web:"alapark.com/parks/paul-m-grist-state-park", tags:["Grist Lake","Fishing","Hiking","Remote"] },
  { name:"Blue Springs State Park", city:"Clio", county:"Barbour", state:"Alabama", region:"South AL", type:"State Park", sites:50, hookup:"Electric + water", phone:"(334) 397-4875", web:"alapark.com/parks/blue-springs-state-park", tags:["Natural springs","Swimming","Fishing"] },
  { name:"Frank Jackson State Park", city:"Opp", county:"Covington", state:"Alabama", region:"South AL", type:"State Park", sites:32, hookup:"Electric + water, cable TV", phone:"(334) 493-6988", web:"alapark.com/parks/frank-jackson-state-park", tags:["Frank Jackson Lake","Fishing","Swimming"] },
  { name:"Florala State Park", city:"Florala", county:"Covington", state:"Alabama", region:"South AL", type:"State Park", sites:24, hookup:"Electric + water", phone:"(334) 858-6425", web:"alapark.com/parks/florala-state-park", tags:["Lake Jackson","Swimming","Fishing","Small quiet park"] },
  { name:"Bladon Springs State Park", city:"Bladon Springs", county:"Choctaw", state:"Alabama", region:"South AL", type:"State Park", sites:26, hookup:"Electric + water", phone:"(251) 754-9207", web:"alapark.com/parks/bladon-springs-state-park", tags:["Mineral springs","Historic","Remote"] },
  { name:"Meaher State Park", city:"Spanish Fort", county:"Baldwin", state:"Alabama", region:"South AL", type:"State Park", sites:61, hookup:"Full hookups (W/E/S), 50A, paved pads", phone:"(251) 626-5529", web:"alapark.com/parks/meaher-state-park", tags:["Mobile Bay","Boardwalk","Birding","Mobile area"] },

  // — Private parks —
  { name:"Arrowhead RV Resort at Smith Lake", city:"Crane Hill", county:"Cullman", state:"Alabama", region:"North AL", type:"Private", sites:60, hookup:"Full hookups, 30/50A, lakeside sites", phone:"(256) 739-6767", web:"arrowheadsmithlake.com", tags:["Lewis Smith Lake","Boat dock","Bar & Grill","Fishing"] },
  { name:"Desoto Caverns Family Campground", city:"Childersburg", county:"Talladega", state:"Alabama", region:"North AL", type:"Private", sites:50, hookup:"Full hookups, 30A + some 50A", phone:"(256) 378-7252", web:"desotocavernspark.com", tags:["Caverns","Family activities","Talladega NF nearby"] },
  { name:"Noccalula Falls Campground", city:"Gadsden", county:"Etowah", state:"Alabama", region:"North AL", type:"Private", sites:94, hookup:"Full hookups (W/E/S), pull-throughs, 30/50A", phone:"(256) 549-4663", web:"gadsdenal.gov/noccalula-falls-park", tags:["Waterfall","Pioneer Village","Pool","Miniature train"] },
  { name:"Bama RV Park", city:"Tuscaloosa", county:"Tuscaloosa", state:"Alabama", region:"Central AL", type:"Private", sites:60, hookup:"Full hookups (W/E/S), 30/50A", phone:"(205) 556-6063", web:"", tags:["University town","I-20/59 corridor","Monthly rates"] },
  { name:"Bohamia Glamping & RV", city:"Talladega", county:"Talladega", state:"Alabama", region:"Central AL", type:"Private", sites:30, hookup:"Electric + water, 30/50A", phone:"", web:"bohamia.com", tags:["Talladega NF","Glamping","Quiet","NASCAR area"] },
  { name:"Winner's Circle RV Resort", city:"Theodore", county:"Mobile", state:"Alabama", region:"South AL", type:"Private", sites:99, hookup:"Full hookups (W/E/S), pull-throughs, 30/50A", phone:"(251) 653-9220", web:"", tags:["Mobile area","I-10 corridor","Monthly rates"] },
  { name:"Tropical Island RV Resort", city:"Foley", county:"Baldwin", state:"Alabama", region:"South AL", type:"Private", sites:85, hookup:"Full hookups, 30/50A, WiFi", phone:"(251) 943-3456", web:"", tags:["Gulf Shores area","Pool","15 min to beach"] },
  { name:"Lakeside Landing RV Park", city:"Guntersville", county:"Marshall", state:"Alabama", region:"North AL", type:"Private", sites:45, hookup:"Full hookups (W/E/S), 30/50A, waterfront sites", phone:"(256) 582-2622", web:"", tags:["Guntersville Lake","Fishing","Boat ramp"] },

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

