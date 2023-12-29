function osnovnaya_funciya_(text_v_nachale, text_v_seredine, text_v_konce) {
  /**
   * 
   * 
   * Тут много чего происходит, напрмиер.
   * 
   * 
   */
  console.log(text_v_nachale, text_v_seredine, text_v_konce);
}

function decoratorTextaVSeredine(fn) {
  return function (text_v_nachale, text_v_seredine, text_v_konce) {
    return fn(text_v_konce, text_v_seredine, text_v_nachale);
  };
}

function proxi_osnovnaya_funciya(text_v_nachale, text_v_seredine, text_v_konce) {
  const proxi_text_v_nachale = text_v_nachale.toUpperCase();
  const proxi_text_v_seredine = text_v_seredine.toUpperCase();
  const proxi_text_v_konce = text_v_konce.toUpperCase();
  osnovnaya_funciya_(proxi_text_v_nachale, proxi_text_v_seredine, proxi_text_v_konce); 
}

function fabric_osnovnaya_funciya (text_v_nachale) {
  const text_v_seredine = 'seredina';
  const text_v_konce = 'konec';
  osnovnaya_funciya_(text_v_nachale, text_v_seredine, text_v_konce);
}

function run(){
  osnovnaya_funciya_("текст в начале", "текст в середине", "текст в конце");

  const decor = decoratorTextaVSeredine(osnovnaya_funciya_);
  decor("текст в начале", "текст в середине", "текст в конце");

  proxi_osnovnaya_funciya("текст в начале", "текст в середине", "текст в конце");

  fabric_osnovnaya_funciya("текст в начале");
}