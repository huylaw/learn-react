// Required
export function Required(value, label, msg = "không được để trống") {
    return {
        value: value,
        message: `${label} ${msg}.`
    }
}

// Regex cho trường dữ liệu
export function Pattern(regex, label, msg = "yêu cầu nhập đúng dữ liệu"){
    return {
        value: regex,
        message: `${label} ${msg}.`
    }
}

// Min length
export function MinLength(number, label, msg = `không được nhập ít hơn ${number} ký tự`){
    return {
        value: number,
        message: `${label} ${msg}.`
    }
}

// Max length
export function MaxLength(number, label, msg = `không được nhập quá ${number} ký tự`){
    return {
        value: number,
        message: `${label} ${msg}.`
    }
}

// Min
export function Min(minValue, label, msg = `giá trị không được nhỏ hơn ${minValue}`){
    return {
        value: minValue,
        message: `${label} ${msg}.`
    }
}

// Max
export function Max(maxValue, label, msg = `giá trị không được lớn hơn ${maxValue}`){
    return {
        value: maxValue,
        message: `${label} ${msg}.`
    }
}