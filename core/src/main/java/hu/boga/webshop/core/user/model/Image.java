/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package hu.boga.webshop.core.user.model;

import lombok.Data;

/**
 * @author user
 */
@Data
public class Image {

  private String fileName;

  private Long id;

  private byte[] data;


}
