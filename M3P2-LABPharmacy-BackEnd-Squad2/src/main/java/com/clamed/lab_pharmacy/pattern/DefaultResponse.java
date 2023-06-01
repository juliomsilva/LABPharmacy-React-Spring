package com.clamed.lab_pharmacy.pattern;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DefaultResponse<T> {
    private int status;
    private String message;
    private T data;


}
