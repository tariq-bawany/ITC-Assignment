        // Category colors (applied via JavaScript)
        const CATEGORY_COLORS = {
            alkali_metal: "#BD241C",
            alkali_earth: "#F6A100",
            transition_material: "#F9EA1B",
            basic_metal: "#AAC90B",
            metalloid: "#1EA538",
            non_metal: "#00B2EC",
            halogen: "#027DC2",
            noble_gas: "#B477B1",
            lathanide: "#BD4079",
            actinide: "#EB589B",
        };

        // Your data structure (118 elements)
        const periodic_data = [
            { atomic_number: 1, ele_symbol: "H", ele_name: "Hydrogen", atomic_mass: 1.008, category: "non_metal", column: 1, row: 1 },
            { atomic_number: 2, ele_symbol: "He", ele_name: "Helium", atomic_mass: 4.003, category: "noble_gas", column: 18, row: 1 },
            { atomic_number: 3, ele_symbol: "Li", ele_name: "Lithium", atomic_mass: 6.941, category: "alkali_metal", column: 1, row: 2 },
            { atomic_number: 4, ele_symbol: "Be", ele_name: "Beryllium", atomic_mass: 9.012, category: "alkali_earth", column: 2, row: 2 },
            { atomic_number: 5, ele_symbol: "B", ele_name: "Boron", atomic_mass: 10.811, category: "metalloid", column: 13, row: 2 },
            { atomic_number: 6, ele_symbol: "C", ele_name: "Carbon", atomic_mass: 12.011, category: "non_metal", column: 14, row: 2 },
            { atomic_number: 7, ele_symbol: "N", ele_name: "Nitrogen", atomic_mass: 14.007, category: "non_metal", column: 15, row: 2 },
            { atomic_number: 8, ele_symbol: "O", ele_name: "Oxygen", atomic_mass: 15.999, category: "non_metal", column: 16, row: 2 },
            { atomic_number: 9, ele_symbol: "F", ele_name: "Fluorine", atomic_mass: 18.998, category: "halogen", column: 17, row: 2 },
            { atomic_number: 10, ele_symbol: "Ne", ele_name: "Neon", atomic_mass: 20.18, category: "noble_gas", column: 18, row: 2 },
            { atomic_number: 11, ele_symbol: "Na", ele_name: "Sodium", atomic_mass: 22.99, category: "alkali_metal", column: 1, row: 3 },
            { atomic_number: 12, ele_symbol: "Mg", ele_name: "Magnesium", atomic_mass: 24.305, category: "alkali_earth", column: 2, row: 3 },
            { atomic_number: 13, ele_symbol: "Al", ele_name: "Aluminium", atomic_mass: 26.982, category: "basic_metal", column: 13, row: 3 },
            { atomic_number: 14, ele_symbol: "Si", ele_name: "Silicon", atomic_mass: 28.086, category: "metalloid", column: 14, row: 3 },
            { atomic_number: 15, ele_symbol: "P", ele_name: "Phosphorus", atomic_mass: 30.974, category: "non_metal", column: 15, row: 3 },
            { atomic_number: 16, ele_symbol: "S", ele_name: "Sulfur", atomic_mass: 32.066, category: "non_metal", column: 16, row: 3 },
            { atomic_number: 17, ele_symbol: "Cl", ele_name: "Chlorine", atomic_mass: 35.453, category: "halogen", column: 17, row: 3 },
            { atomic_number: 18, ele_symbol: "Ar", ele_name: "Argon", atomic_mass: 39.948, category: "noble_gas", column: 18, row: 3 },
            { atomic_number: 19, ele_symbol: "K", ele_name: "Potassium", atomic_mass: 39.098, category: "alkali_metal", column: 1, row: 4 },
            { atomic_number: 20, ele_symbol: "Ca", ele_name: "Calcium", atomic_mass: 40.078, category: "alkali_earth", column: 2, row: 4 },
            { atomic_number: 21, ele_symbol: "Sc", ele_name: "Scandium", atomic_mass: 44.956, category: "transition_material", column: 3, row: 4 },
            { atomic_number: 22, ele_symbol: "Ti", ele_name: "Titanium", atomic_mass: 47.867, category: "transition_material", column: 4, row: 4 },
            { atomic_number: 23, ele_symbol: "V", ele_name: "Vanadium", atomic_mass: 50.942, category: "transition_material", column: 5, row: 4 },
            { atomic_number: 24, ele_symbol: "Cr", ele_name: "Chromium", atomic_mass: 51.996, category: "transition_material", column: 6, row: 4 },
            { atomic_number: 25, ele_symbol: "Mn", ele_name: "Manganese", atomic_mass: 54.938, category: "transition_material", column: 7, row: 4 },
            { atomic_number: 26, ele_symbol: "Fe", ele_name: "Iron", atomic_mass: 55.845, category: "transition_material", column: 8, row: 4 },
            { atomic_number: 27, ele_symbol: "Co", ele_name: "Cobalt", atomic_mass: 58.933, category: "transition_material", column: 9, row: 4 },
            { atomic_number: 28, ele_symbol: "Ni", ele_name: "Nickel", atomic_mass: 58.693, category: "transition_material", column: 10, row: 4 },
            { atomic_number: 29, ele_symbol: "Cu", ele_name: "Copper", atomic_mass: 63.546, category: "transition_material", column: 11, row: 4 },
            { atomic_number: 30, ele_symbol: "Zn", ele_name: "Zinc", atomic_mass: 65.38, category: "transition_material", column: 12, row: 4 },
            { atomic_number: 31, ele_symbol: "Ga", ele_name: "Gallium", atomic_mass: 69.723, category: "basic_metal", column: 13, row: 4 },
            { atomic_number: 32, ele_symbol: "Ge", ele_name: "Germanium", atomic_mass: 72.631, category: "metalloid", column: 14, row: 4 },
            { atomic_number: 33, ele_symbol: "As", ele_name: "Arsenic", atomic_mass: 74.922, category: "metalloid", column: 15, row: 4 },
            { atomic_number: 34, ele_symbol: "Se", ele_name: "Selenium", atomic_mass: 78.971, category: "non_metal", column: 16, row: 4 },
            { atomic_number: 35, ele_symbol: "Br", ele_name: "Bromine", atomic_mass: 79.904, category: "halogen", column: 17, row: 4 },
            { atomic_number: 36, ele_symbol: "Kr", ele_name: "Krypton", atomic_mass: 83.798, category: "noble_gas", column: 18, row: 4 },
            { atomic_number: 37, ele_symbol: "Rb", ele_name: "Rubidium", atomic_mass: 85.468, category: "alkali_metal", column: 1, row: 5 },
            { atomic_number: 38, ele_symbol: "Sr", ele_name: "Strontium", atomic_mass: 87.62, category: "alkali_earth", column: 2, row: 5 },
            { atomic_number: 39, ele_symbol: "Y", ele_name: "Yttrium", atomic_mass: 88.906, category: "transition_material", column: 3, row: 5 },
            { atomic_number: 40, ele_symbol: "Zr", ele_name: "Zirconium", atomic_mass: 91.224, category: "transition_material", column: 4, row: 5 },
            { atomic_number: 41, ele_symbol: "Nb", ele_name: "Niobium", atomic_mass: 92.906, category: "transition_material", column: 5, row: 5 },
            { atomic_number: 42, ele_symbol: "Mo", ele_name: "Molybdenum", atomic_mass: 95.95, category: "transition_material", column: 6, row: 5 },
            { atomic_number: 43, ele_symbol: "Tc", ele_name: "Technetium", atomic_mass: 98.907, category: "transition_material", column: 7, row: 5 },
            { atomic_number: 44, ele_symbol: "Ru", ele_name: "Ruthenium", atomic_mass: 101.07, category: "transition_material", column: 8, row: 5 },
            { atomic_number: 45, ele_symbol: "Rh", ele_name: "Rhodium", atomic_mass: 102.906, category: "transition_material", column: 9, row: 5 },
            { atomic_number: 46, ele_symbol: "Pd", ele_name: "Palladium", atomic_mass: 106.42, category: "transition_material", column: 10, row: 5 },
            { atomic_number: 47, ele_symbol: "Ag", ele_name: "Silver", atomic_mass: 107.868, category: "transition_material", column: 11, row: 5 },
            { atomic_number: 48, ele_symbol: "Cd", ele_name: "Cadmium", atomic_mass: 112.414, category: "transition_material", column: 12, row: 5 },
            { atomic_number: 49, ele_symbol: "In", ele_name: "Indium", atomic_mass: 114.818, category: "basic_metal", column: 13, row: 5 },
            { atomic_number: 50, ele_symbol: "Sn", ele_name: "Tin", atomic_mass: 118.711, category: "basic_metal", column: 14, row: 5 },
            { atomic_number: 51, ele_symbol: "Sb", ele_name: "Antimony", atomic_mass: 121.76, category: "metalloid", column: 15, row: 5 },
            { atomic_number: 52, ele_symbol: "Te", ele_name: "Tellurium", atomic_mass: 127.6, category: "metalloid", column: 16, row: 5 },
            { atomic_number: 53, ele_symbol: "I", ele_name: "Iodine", atomic_mass: 126.904, category: "halogen", column: 17, row: 5 },
            { atomic_number: 54, ele_symbol: "Xe", ele_name: "Xenon", atomic_mass: 131.293, category: "noble_gas", column: 18, row: 5 },
            { atomic_number: 55, ele_symbol: "Cs", ele_name: "Cesium", atomic_mass: 132.905, category: "alkali_metal", column: 1, row: 6 },
            { atomic_number: 56, ele_symbol: "Ba", ele_name: "Barium", atomic_mass: 137.328, category: "alkali_earth", column: 2, row: 6 },

            // Lanthanides (separate series row)
            { atomic_number: 57, ele_symbol: "La", ele_name: "Lanthanum", atomic_mass: 138.905, category: "lathanide", column: 4, row: 9 },
            { atomic_number: 58, ele_symbol: "Ce", ele_name: "Cerium", atomic_mass: 140.116, category: "lathanide", column: 5, row: 9 },
            { atomic_number: 59, ele_symbol: "Pr", ele_name: "Praseodymium", atomic_mass: 140.908, category: "lathanide", column: 6, row: 9 },
            { atomic_number: 60, ele_symbol: "Nd", ele_name: "Neodymium", atomic_mass: 144.243, category: "lathanide", column: 7, row: 9 },
            { atomic_number: 61, ele_symbol: "Pm", ele_name: "Promethium", atomic_mass: 144.913, category: "lathanide", column: 8, row: 9 },
            { atomic_number: 62, ele_symbol: "Sm", ele_name: "Samarium", atomic_mass: 150.36, category: "lathanide", column: 9, row: 9 },
            { atomic_number: 63, ele_symbol: "Eu", ele_name: "Europium", atomic_mass: 151.964, category: "lathanide", column: 10, row: 9 },
            { atomic_number: 64, ele_symbol: "Gd", ele_name: "Gadolinium", atomic_mass: 157.25, category: "lathanide", column: 11, row: 9 },
            { atomic_number: 65, ele_symbol: "Tb", ele_name: "Terbium", atomic_mass: 158.925, category: "lathanide", column: 12, row: 9 },
            { atomic_number: 66, ele_symbol: "Dy", ele_name: "Dysprosium", atomic_mass: 162.5, category: "lathanide", column: 13, row: 9 },
            { atomic_number: 67, ele_symbol: "Ho", ele_name: "Holmium", atomic_mass: 164.93, category: "lathanide", column: 14, row: 9 },
            { atomic_number: 68, ele_symbol: "Er", ele_name: "Erbium", atomic_mass: 167.259, category: "lathanide", column: 15, row: 9 },
            { atomic_number: 69, ele_symbol: "Tm", ele_name: "Thulium", atomic_mass: 168.934, category: "lathanide", column: 16, row: 9 },
            { atomic_number: 70, ele_symbol: "Yb", ele_name: "Ytterbium", atomic_mass: 173.055, category: "lathanide", column: 17, row: 9 },
            { atomic_number: 71, ele_symbol: "Lu", ele_name: "Lutetium", atomic_mass: 174.967, category: "lathanide", column: 18, row: 9 },

            { atomic_number: 72, ele_symbol: "Hf", ele_name: "Hafnium", atomic_mass: 178.49, category: "transition_material", column: 4, row: 6 },
            { atomic_number: 73, ele_symbol: "Ta", ele_name: "Tantalum", atomic_mass: 180.948, category: "transition_material", column: 5, row: 6 },
            { atomic_number: 74, ele_symbol: "W", ele_name: "Tungsten", atomic_mass: 183.84, category: "transition_material", column: 6, row: 6 },
            { atomic_number: 75, ele_symbol: "Re", ele_name: "Rhenium", atomic_mass: 186.207, category: "transition_material", column: 7, row: 6 },
            { atomic_number: 76, ele_symbol: "Os", ele_name: "Osmium", atomic_mass: 190.23, category: "transition_material", column: 8, row: 6 },
            { atomic_number: 77, ele_symbol: "Ir", ele_name: "Iridium", atomic_mass: 192.217, category: "transition_material", column: 9, row: 6 },
            { atomic_number: 78, ele_symbol: "Pt", ele_name: "Platinum", atomic_mass: 195.085, category: "transition_material", column: 10, row: 6 },
            { atomic_number: 79, ele_symbol: "Au", ele_name: "Gold", atomic_mass: 196.967, category: "transition_material", column: 11, row: 6 },
            { atomic_number: 80, ele_symbol: "Hg", ele_name: "Mercury", atomic_mass: 200.592, category: "transition_material", column: 12, row: 6 },
            { atomic_number: 81, ele_symbol: "Tl", ele_name: "Thallium", atomic_mass: 204.383, category: "basic_metal", column: 13, row: 6 },
            { atomic_number: 82, ele_symbol: "Pb", ele_name: "Lead", atomic_mass: 207.2, category: "basic_metal", column: 14, row: 6 },
            { atomic_number: 83, ele_symbol: "Bi", ele_name: "Bismuth", atomic_mass: 208.98, category: "basic_metal", column: 15, row: 6 },
            { atomic_number: 84, ele_symbol: "Po", ele_name: "Polonium", atomic_mass: 208.982, category: "metalloid", column: 16, row: 6 },
            { atomic_number: 85, ele_symbol: "At", ele_name: "Astatine", atomic_mass: 209.987, category: "halogen", column: 17, row: 6 },
            { atomic_number: 86, ele_symbol: "Rn", ele_name: "Radon", atomic_mass: 222.018, category: "noble_gas", column: 18, row: 6 },
            { atomic_number: 87, ele_symbol: "Fr", ele_name: "Francium", atomic_mass: 223.02, category: "alkali_metal", column: 1, row: 7 },
            { atomic_number: 88, ele_symbol: "Ra", ele_name: "Radium", atomic_mass: 226.025, category: "alkali_earth", column: 2, row: 7 },

            // Actinides (separate series row)
            { atomic_number: 89, ele_symbol: "Ac", ele_name: "Actinium", atomic_mass: 227.028, category: "actinide", column: 4, row: 10 },
            { atomic_number: 90, ele_symbol: "Th", ele_name: "Thorium", atomic_mass: 232.038, category: "actinide", column: 5, row: 10 },
            { atomic_number: 91, ele_symbol: "Pa", ele_name: "Protactinium", atomic_mass: 231.036, category: "actinide", column: 6, row: 10 },
            { atomic_number: 92, ele_symbol: "U", ele_name: "Uranium", atomic_mass: 238.029, category: "actinide", column: 7, row: 10 },
            { atomic_number: 93, ele_symbol: "Np", ele_name: "Neptunium", atomic_mass: 237.048, category: "actinide", column: 8, row: 10 },
            { atomic_number: 94, ele_symbol: "Pu", ele_name: "Plutonium", atomic_mass: 244.064, category: "actinide", column: 9, row: 10 },
            { atomic_number: 95, ele_symbol: "Am", ele_name: "Americium", atomic_mass: 243.061, category: "actinide", column: 10, row: 10 },
            { atomic_number: 96, ele_symbol: "Cm", ele_name: "Curium", atomic_mass: 247.07, category: "actinide", column: 11, row: 10 },
            { atomic_number: 97, ele_symbol: "Bk", ele_name: "Berkelium", atomic_mass: 247.07, category: "actinide", column: 12, row: 10 },
            { atomic_number: 98, ele_symbol: "Cf", ele_name: "Californium", atomic_mass: 251.08, category: "actinide", column: 13, row: 10 },
            { atomic_number: 99, ele_symbol: "Es", ele_name: "Einsteinium", atomic_mass: 254, category: "actinide", column: 14, row: 10 },
            { atomic_number: 100, ele_symbol: "Fm", ele_name: "Fermium", atomic_mass: 257.095, category: "actinide", column: 15, row: 10 },
            { atomic_number: 101, ele_symbol: "Md", ele_name: "Mendelevium", atomic_mass: 258.1, category: "actinide", column: 16, row: 10 },
            { atomic_number: 102, ele_symbol: "No", ele_name: "Nobelium", atomic_mass: 259.101, category: "actinide", column: 17, row: 10 },
            { atomic_number: 103, ele_symbol: "Lr", ele_name: "Lawrencium", atomic_mass: 262, category: "actinide", column: 18, row: 10 },

            { atomic_number: 104, ele_symbol: "Rf", ele_name: "Rutherfordium", atomic_mass: 261, category: "transition_material", column: 4, row: 7 },
            { atomic_number: 105, ele_symbol: "Db", ele_name: "Dubnium", atomic_mass: 262, category: "transition_material", column: 5, row: 7 },
            { atomic_number: 106, ele_symbol: "Sg", ele_name: "Seaborgium", atomic_mass: 266, category: "transition_material", column: 6, row: 7 },
            { atomic_number: 107, ele_symbol: "Bh", ele_name: "Bohrium", atomic_mass: 264, category: "transition_material", column: 7, row: 7 },
            { atomic_number: 108, ele_symbol: "Hs", ele_name: "Hassium", atomic_mass: 269, category: "transition_material", column: 8, row: 7 },
            { atomic_number: 109, ele_symbol: "Mt", ele_name: "Meitnerium", atomic_mass: 278, category: "transition_material", column: 9, row: 7 },
            { atomic_number: 110, ele_symbol: "Ds", ele_name: "Darmstadtium", atomic_mass: 281, category: "transition_material", column: 10, row: 7 },
            { atomic_number: 111, ele_symbol: "Rg", ele_name: "Roentgenium", atomic_mass: 280, category: "transition_material", column: 11, row: 7 },
            { atomic_number: 112, ele_symbol: "Cn", ele_name: "Copernicium", atomic_mass: 285, category: "transition_material", column: 12, row: 7 },
            { atomic_number: 113, ele_symbol: "Nh", ele_name: "Nihonium", atomic_mass: 286, category: "basic_metal", column: 13, row: 7 },
            { atomic_number: 114, ele_symbol: "Fl", ele_name: "Flerovium", atomic_mass: 289, category: "basic_metal", column: 14, row: 7 },
            { atomic_number: 115, ele_symbol: "Mc", ele_name: "Moscovium", atomic_mass: 289, category: "basic_metal", column: 15, row: 7 },
            { atomic_number: 116, ele_symbol: "Lv", ele_name: "Livermorium", atomic_mass: 293, category: "basic_metal", column: 16, row: 7 },
            { atomic_number: 117, ele_symbol: "Ts", ele_name: "Tennessine", atomic_mass: 294, category: "halogen", column: 17, row: 7 },
            { atomic_number: 118, ele_symbol: "Og", ele_name: "Oganesson", atomic_mass: 294, category: "noble_gas", column: 18, row: 7 },
        ];

        const container = document.querySelector("#container");

        function createSeriesHint({ col, row, range, label, category }) {
            const div = document.createElement("div");
            div.className = "grid-item series-hint";
            div.style.gridColumn = String(col);
            div.style.gridRow = String(row);
            div.style.backgroundColor = CATEGORY_COLORS[category] ;
            div.innerHTML = `
        <div class="range">${range}</div>
        <div class="label">${label}</div>
      `;
            return div;
        }

        function createElementCard(val) {
            const div = document.createElement("div");
            div.className = "grid-item";
            div.style.gridColumn = String(val.column);
            div.style.gridRow = String(val.row);
            div.style.backgroundColor = CATEGORY_COLORS[val.category] ;

            div.innerHTML = `
        <span class="atomic_number">${val.atomic_number}</span>
        <span class="ele_symbol">${val.ele_symbol}</span>
        <span class="ele_name">${val.ele_name}</span>
        <span class="atomic_mass">${val.atomic_mass}</span>
      `;
            return div;
        }


// Extra elements cell that shows lanthanides and actinides series declaration and 
container.appendChild(createSeriesHint({
    col: 3,
    row: 6,
    range: "57-71",
    label: "Lanthanides",
    category: "lathanide",
}))
container.appendChild(createSeriesHint({
    col: 3,
    row: 7,
    range: "89-103",
    label: "Actinides",
    category: "actinide",
}))
// Render all elements dynamically
for (const el of periodic_data) {
    container.appendChild(createElementCard(el));
}
